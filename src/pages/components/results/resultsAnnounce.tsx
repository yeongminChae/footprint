import { useState, useEffect } from "react";

import { useRecoilValue } from "recoil";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { AnimatePresence, motion } from "framer-motion";

import cls from "@/libs/utils";
import { axisCartegory } from "@/libs/atoms";

const ResultsAnnounce = ({ myDataArr }: { myDataArr: number[] }) => {
  const [date, setDate] = useState(Date);
  const testedDate = format(new Date(date), "yyyy년 MM월 dd일 a", {
    locale: ko,
  });

  useEffect(() => {
    const storedDate = localStorage.getItem("date");
    setDate(storedDate ? JSON.parse(storedDate) : "");
  }, []);

  return (
    <div className={container}>
      <span className="font-bold text-3xl text-btnColor">결과 안내</span>
      <span>검사 일시 : {textVariant(testedDate)}</span>
      <div>
        {textVariant("email1@gmail.com")}
        님의 이산화탄소(CO₂) 발생량 통계입니다.
      </div>
      <div className="break-keep">
        <AveTextComponent myDataArr={myDataArr} />
      </div>
      <MyDataTextComponent />
    </div>
  );
};

const container =
  "col-start-2 row-start-1 flex flex-col gap-4 pt-5 px-4 font-semibold";

const textVariant = (text: string) => (
  <span className="text-btnColor">{text}</span>
);

const lessMoreSameVariant = (ratio: number) => {
  const text = ratio > 100 ? "많이" : "적게";
  const textStyle = text === "많이" ? "text-red-400" : "text-btnColor";

  return (
    <span className={cls(textStyle, "font-semibold")}>
      {text === "적게"
        ? `${(100 - ratio).toLocaleString()}% `
        : `${ratio.toLocaleString()}% `}
      {text}
    </span>
  );
};

const AveTextComponent = ({ myDataArr }: { myDataArr: number[] }) => {
  const totalAveDataArr = 201.5;
  const totalMyDataArr = Math.round(
    myDataArr.reduce((acc, cur) => acc + cur, 0)
  );
  const ratio = Math.round((totalMyDataArr / totalAveDataArr) * 100);

  return (
    <div className="break-keep">
      {textVariant("email1@gmail.com")}
      님은 이산화탄소 배출량은 총{" "}
      {textVariant(totalMyDataArr.toLocaleString() + "kg")} 이며, 평균 가정
      배출량 {textVariant(`${totalAveDataArr} kg `)} 보다 약{" "}
      {lessMoreSameVariant(ratio)} 배출하고 있습니다."
    </div>
  );
};

const MyDataTextComponent = () => {
  const category = useRecoilValue(axisCartegory);
  const { key, myValue, aveValue } = category;
  const ratio = Math.round((category.myValue / category.aveValue) * 100);

  return (
    <AnimatePresence>
      {category.key == "" && category.myValue == 0 ? null : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 } }}
          exit={{ opacity: 0 }}
          className="break-keep"
        >
          {textVariant(key)} 배출량은 총 {textVariant(myValue.toString())}kg
          이고 이는 평균 배출량 {textVariant(aveValue.toString())}kg 보다 약{" "}
          {lessMoreSameVariant(ratio)} 배출하고 있습니다.
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResultsAnnounce;
