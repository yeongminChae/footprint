import { useState, useEffect } from "react";

import { format } from "date-fns";
import { ko } from "date-fns/locale";

const ResultsAnnounce = ({ myDataArr }: { myDataArr: number[] }) => {
  const [date, setDate] = useState(Date);

  const totalAveDataArr = 201.5;
  const totalMyDataArr = Math.round(
    myDataArr.reduce((acc, cur) => acc + cur, 0)
  );
  const ratio = Math.round((totalMyDataArr / totalAveDataArr) * 100);
  const testedDate = format(new Date(date), "yyyy년 MM월 dd일", { locale: ko });

  useEffect(() => {
    const storedDate = localStorage.getItem("date");
    setDate(storedDate ? JSON.parse(storedDate) : "");
  }, []);

  return (
    <div className="col-start-2 row-start-1 flex flex-col gap-4 pt-5 px-4 font-semibold">
      <span className="font-bold text-3xl text-btnColor">결과 안내</span>
      <span>검사 일시 : {textVariant(testedDate)}</span>
      <div>
        {textVariant("email1@gmail.com")}
        님의 이산화탄소(CO₂) 발생량 통계입니다.
      </div>
      <div className="break-keep">
        {textVariant("email1@gmail.com")}
        님은 이산화탄소 배출량은 총 {textVariant(totalMyDataArr + "kg")} 이며,
        평균 가정 배출량 {textVariant(`${totalAveDataArr} kg `)} 보다 약{" "}
        {textVariant(ratio + "%")} 더 적게 배출하고 있습니다."
      </div>
    </div>
  );
};

const textVariant = (text: string) => (
  <span className="text-btnColor">{text}</span>
);

export default ResultsAnnounce;
