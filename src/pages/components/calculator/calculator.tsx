import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import cls from "@/libs/utils";
import { iFormConfig } from "./formConfigs";
import CalculatorFormFooter from "./calculatorForm/calculatorFormFooter";
import CalculatorFormCheckBox from "./calculatorForm/calculatorFormCheckBox";
import CalculatorFormResults from "./calculatorForm/calculatorFormResults";
import CalculatorFormInput from "./calculatorForm/calculatorFormInput";

interface iCalculaotrFormProps extends iFormConfig {
  isFormValid: (isValid: boolean) => void;
}

const CalculatorForm = ({
  id,
  title,
  inputTitle,
  units,
  types,
  calcNum,
  keyword,
  isFormValid,
}: iCalculaotrFormProps) => {
  const [type, setType] = useState(types ? types[0] : "");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });

  const usage = watch("usage");

  const currentSelectedType = (curType: string) => {
    setType(curType);
  };

  const onSubmit = () => {
    console.log(`${keyword} ${id} 발생량 `);
  };

  useEffect(() => {
    isFormValid(isValid);
  }, [isFormValid, isValid]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formStyle}>
      <CalculatorFormHeader title={title} />

      <div className={cls(id >= 3 ? "gap-10" : "gap-14", textContainerStyle)}>
        <CalculatorFormCheckBox
          id={id}
          reset={reset}
          types={types}
          currentType={currentSelectedType}
        />

        <CalculatorFormInput
          id={id}
          title={inputTitle}
          type={type}
          register={register}
          units={units}
        />

        <CalculatorFormResults
          usage={usage}
          calcNum={calcNum}
          type={type}
          types={types}
        />

        <CalculatorFormFooter
          id={id}
          usage={usage}
          keyword={keyword}
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </form>
  );
};

export default CalculatorForm;

const CalculatorFormHeader = ({ title }: { title: string }) => {
  return (
    <div
      className={cls(
        borderOpacity40,
        "h-20 px-7 flex flex-col justify-center border-b"
      )}
    >
      <span className="text-xl font-bold tracking-wide">{title}</span>
    </div>
  );
};

const formStyle =
  "w-[48rem] h-[28rem] text-btnColor mt-7 bg-white rounded-lg border border-bordeColor shadow-xl";

const textContainerStyle =
  "h-[calc(100%-5rem)] flex flex-col justify-center items-end px-10 pt-3 ";

export const sharedStyles =
  "flex-grow h-11 rounded-lg pr-4 border border-btnColor border-opacity-80";

export const flexCenter = "flex items-center";

export const borderOpacity40 = "border-btnColor border-opacity-45";

export const flexCenter_Justify = flexCenter + " justify-center";
