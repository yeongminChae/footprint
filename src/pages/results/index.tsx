import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { CalculatorFormHeader } from "../components/calculator/calculator";
import BarChart from "../components/results/barChart";
import DonutChart from "../components/results/donutChart";
import ResultsAnnounce from "../components/results/resultsAnnounce";
import cls from "@/libs/utils";
import { gradiantBackground } from "..";

const results = () => {
  const router = useRouter();
  const [co2Data, setCo2Data] = useState({});
  const newCo2Data = Object.values(co2Data).map((i) => Number(i));

  useEffect(() => {
    const storedData = localStorage.getItem("co2Data");
    setCo2Data(storedData ? JSON.parse(storedData) : {});
  }, []);

  // useEffect(() => {
  //   if (Object.keys(co2Data).length === 0) {
  //     router.push("/");
  //   }
  // }, []);

  return (
    <div
      className={cls(
        "h-screen w-screen pt-16 bg-bgColor flex items-center justify-center",
        gradiantBackground
      )}
    >
      <section className="w-[65rem] h-[40rem] bg-white rounded-lg border-2 shadow-xl">
        <CalculatorFormHeader title="결과 분석" />
        <div className={gridContainer}>
          <DonutChart myDataArr={newCo2Data} />
          <ResultsAnnounce myDataArr={newCo2Data} />
          <BarChart myDataArr={newCo2Data} />
        </div>
      </section>
    </div>
  );
};

const gridContainer = "grid grid-cols-2 grid-rows-2 w-full h-[calc(100%-5rem)]";

export default results;
