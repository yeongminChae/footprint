import {
  FieldError,
  FieldErrors,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

import cls from "@/libs/utils";
import { flexCenter, sharedStyles } from "../calculator";

interface iCalculatorFormInput {
  id: number;
  title: string;
  type: string;
  units: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  types?: string[];
}

interface iIsError {
  isError:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}

const CalculatorFormInput = ({
  id,
  title,
  type,
  register,
  errors,
  units,
}: iCalculatorFormInput) => {
  return (
    <div className="flex flex-col w-full h-16">
      <div className={cls(flexCenter, "w-full gap-4")}>
        <span className="w-28 text-lg font-medium">{title}</span>
        <input
          {...register("usage", {
            required: true,
            validate: (value) =>
              !isNaN(Number(value)) || "유효한 값을 입력해주세요.",
          })}
          name="usage"
          type="text"
          className={inputStylesCombined({ isError: errors.usage })}
          placeholder="사용량을 입력해주세요..."
          required
        />
        <span className="text-xs w-12 font-medium">
          {id === 4 ? type : units} / 월
        </span>
      </div>
      <ErrorTextTag isError={errors.usage?.message} />
    </div>
  );
};

export default CalculatorFormInput;

const placeHolderStyles =
  "placeholder:text-btnColor placeholder:opacity-45 placeholder:text-sm placeholder:right-4 placeholder:absolute";

const inputStyles = cls(
  placeHolderStyles,
  "text-sm text-end outline-none appearance-none"
);

const inputStylesCombined = ({ isError }: iIsError) => {
  const inputStylesTag = sharedStyles + inputStyles;
  return cls(inputStylesTag, isError ? "text-red-400" : "");
};

const ErrorTextTag = ({ isError }: iIsError) => {
  return (
    <AnimatePresence>
      {isError && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-red-400 text-sm font-semibold self-end pr-16"
        >
          {isError?.toString()}
        </motion.span>
      )}
    </AnimatePresence>
  );
};
