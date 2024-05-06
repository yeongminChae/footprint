import { useEffect, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";

import cls from "@/libs/utils";
import Button from "../ui/button";
import { iFormConfig } from "./formConfigs";

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
  const ref = useRef(null);
  const [co2, setCo2] = useState("");
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

  const isInView = useInView(ref, { once: true });
  const usage = watch("usage");

  useEffect(() => {
    isFormValid(isValid);
  }, [isFormValid, isValid]);

  useEffect(() => {
    calcFunc();
  }, [usage, calcNum, setCo2]);

  const calcFunc = () => {
    let temp = 0;
    if (typeof calcNum === "number") {
      temp = Number(usage) * calcNum;
    } else if (typeof calcNum !== "number" && types) {
      const calcArr = calcNum[types?.indexOf(type)];
      const divided = calcArr[0];
      const multiple = calcArr[1];
      temp = (Number(usage) / divided) * multiple;
    }

    const calculatedCo2 = isNaN(temp) ? (0.0).toFixed(1) : temp.toFixed(1);
    setCo2(calculatedCo2);
  };

  const setTypeFunc = (type: string) => {
    setType(type);
    reset();
  };

  const onSubmit = () => {
    console.log("keyword");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formStyle}>
      <div
        className={cls(
          borderOpacity40,
          "h-20 px-7 flex flex-col justify-center border-b"
        )}
      >
        <span className="text-xl font-bold tracking-wide">{title}</span>
      </div>

      <div className={cls(id >= 3 ? "gap-10" : "gap-14", textContainerStyle)}>
        {id >= 3 ? (
          <div className={cls(flexCenter, "w-full gap-4")}>
            <span className="w-28 text-lg font-medium">
              {id === 3 ? "승용차 종류" : "폐기물 단위"}
            </span>
            <div className="flex-grow flex items-center gap-20 mx-auto">
              {types?.map((i) => (
                <div
                  key={i}
                  onClick={() => setTypeFunc(i)}
                  className="flex gap-3 cursor-pointer items-center "
                >
                  <motion.div
                    initial={{
                      backgroundColor: "rgb(255, 255, 255)",
                      opacity: 0,
                    }}
                    animate={{
                      backgroundColor:
                        type === i ? "rgb(0 139 139)" : "rgb(255, 255, 255)",
                      opacity: type === i ? 0.8 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-5 w-5 border-2 border-btnColor rounded-sm"
                  />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: type != i ? 0.45 : 1 }}
                    transition={{ duration: 0.5 }}
                    className={cls(type === i ? "font-semibold" : "")}
                  >
                    {i}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className={cls(flexCenter, "w-full gap-4")}>
          <span className="w-28 text-lg font-medium">{inputTitle}</span>
          <input
            {...register("usage", { required: true })}
            name="usage"
            type="string"
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

        <div className={cls(flexCenter, "w-full gap-4")}>
          <span className="w-28 text-lg font-medium">CO₂ 발생량</span>
          <div className={cls(sharedStyles, flexCenter, "justify-end")}>
            <span className="text-sm opacity-50 tracking-widest">{co2}</span>
          </div>
          <span className="text-xs w-12 font-medium">kg / 월</span>
        </div>

        <div className="w-full grid grid-cols-3 justify-center">
          <motion.div
            ref={ref}
            key="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1 }}
            className={cls(flexCenter_Justify, "col-start-2 col-span-1")}
            style={{ display: id === 4 ? "" : "none" }}
          >
            <Button
              btnTitle={"제출"}
              onClick={handleSubmit(onSubmit)}
              isActivate={usage === "" ? false : true}
              size="small"
            />
          </motion.div>

          <div
            className={cls(
              borderOpacity40,
              flexCenter_Justify,
              "border w-32 h-9 rounded-full self-center place-self-end col-start-3"
            )}
          >
            <span className="text-xs">{keyword} CO₂ 발생량</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CalculatorForm;

const formStyle =
  "w-[48rem] h-[28rem] text-btnColor mt-7 bg-white rounded-lg border border-bordeColor shadow-xl";

const textContainerStyle =
  "h-[calc(100%-5rem)] flex flex-col justify-center items-end px-10 pt-3 ";

const sharedStyles =
  "flex-grow h-11 rounded-lg pr-4 border border-btnColor border-opacity-80";

const placeHolderStyles =
  "placeholder:text-btnColor placeholder:opacity-45 placeholder:text-sm placeholder:right-4 placeholder:absolute";

const borderOpacity40 = "border-btnColor border-opacity-45";

const flexCenter = "flex items-center";

const flexCenter_Justify = flexCenter + " justify-center";
