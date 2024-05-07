import { useEffect } from "react";

import { useRecoilState } from "recoil";

import cls from "@/libs/utils";
import { co2Atom } from "@/libs/atoms";
import { flexCenter, sharedStyles } from "../calculator";

interface iCalculatorFormResults {
  usage: string;
  calcNum: number | number[][];
  type: string;
  types?: string[];
}

const CalculatorFormResults = ({
  usage,
  calcNum,
  type,
  types,
}: iCalculatorFormResults) => {
  const [co2, setCo2] = useRecoilState(co2Atom);

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

  useEffect(() => {
    calcFunc();
  }, [usage, calcNum, setCo2]);

  return (
    <div className={cls(flexCenter, "w-full gap-4")}>
      <span className="w-28 text-lg font-medium">CO₂ 발생량</span>
      <div className={cls(sharedStyles, flexCenter, "justify-end")}>
        <span className="text-sm opacity-50 tracking-widest">{co2}</span>
      </div>
      <span className="text-xs w-12 font-medium">kg / 월</span>
    </div>
  );
};

export default CalculatorFormResults;
