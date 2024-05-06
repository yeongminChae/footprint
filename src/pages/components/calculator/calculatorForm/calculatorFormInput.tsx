import { FieldValues, UseFormRegister } from "react-hook-form";

import cls from "@/libs/utils";
import { flexCenter, sharedStyles } from "../calculator";

interface iCalculatorFormInput {
  id: number;
  title: string;
  type: string;
  units: string;
  register: UseFormRegister<FieldValues>;
  types?: string[];
}

const CalculatorFormInput = ({
  id,
  title,
  type,
  register,
  units,
}: iCalculatorFormInput) => {
  return (
    <div className={cls(flexCenter, "w-full gap-4")}>
      <span className="w-28 text-lg font-medium">{title}</span>
      <input
        {...register("usage", { required: true })}
        name="usage"
        type="text"
        className={cls(
          sharedStyles,
          placeHolderStyles,
          "text-sm text-end outline-none appearance-none "
        )}
        placeholder="사용량을 입력해주세요..."
        required
      />
      <span className="text-xs w-12 font-medium">
        {id === 4 ? type : units} / 월
      </span>
    </div>
  );
};

export default CalculatorFormInput;

const placeHolderStyles =
  "placeholder:text-btnColor placeholder:opacity-45 placeholder:text-sm placeholder:right-4 placeholder:absolute";
