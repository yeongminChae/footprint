import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import cls from "@/libs/utils";
import Button from "../ui/button";

interface iCalculaotrFormProps {
  id: number;
  title: string;
  inputTitle: string;
  units: string;
  keyword: string;
  types?: string[];
  calcNum: number;
  key: string;
}

const CalculatorForm = ({
  id,
  title,
  inputTitle,
  units,
  types,
  calcNum,
  keyword,
}: iCalculaotrFormProps) => {
  const { register, handleSubmit, watch } = useForm({ mode: "onSubmit" });
  const [co2, setCo2] = useState("");
  const [type, setType] = useState(types ? types[0] : "");

  const usage = watch("usage");

  useEffect(() => {
    const temp = Number(usage) * calcNum;
    const calculatedCo2 = isNaN(temp) ? (0.0).toFixed(1) : temp.toFixed(1);

    setCo2(calculatedCo2);
  }, [usage, calcNum]);

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
                  onClick={() => setType(i)}
                  className="flex gap-3 cursor-pointer items-center "
                >
                  <div
                    className={cls(
                      type === i ? "opacity-80 bg-btnColor" : "",
                      "h-5 w-5 border-2 border-btnColor rounded-sm"
                    )}
                  />
                  <span
                    className={cls(
                      type === i ? "opacity-100 font-semibold" : "opacity-45"
                    )}
                  >
                    {i}
                  </span>
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
          <span className="text-xs w-12 font-medium">{units} / 월</span>
        </div>

        <div className={cls(flexCenter, "w-full gap-4")}>
          <span className="w-28 text-lg font-medium">CO₂ 발생량</span>
          <div className={cls(sharedStyles, flexCenter, "justify-end")}>
            <span className="text-sm opacity-50 tracking-widest">{co2}</span>
          </div>
          <span className="text-xs w-12 font-medium">kg / 월</span>
        </div>

        <div className="w-full grid grid-cols-3 justify-center">
          {id === 4 ? (
            <div className={cls(flexCenter_Justify, "col-start-2 col-span-1")}>
              <Button
                btnTitle={"제출"}
                onClick={handleSubmit(onSubmit)}
                size="small"
              />
            </div>
          ) : null}

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
