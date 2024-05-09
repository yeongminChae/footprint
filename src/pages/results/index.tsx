import { CalculatorFormHeader } from "../components/calculator/calculator";
import BarChart from "../components/results/barChart";
import DonutChart from "../components/results/donutChart";

const results = () => {
  return (
    <div className="h-screen w-screen pt-16 bg-bgColor flex items-center justify-center">
      <div className="w-[65rem] h-[40rem] bg-white rounded-lg border-2 shadow-xl">
        <CalculatorFormHeader title="결과 분석" />
        <div className="grid grid-cols-2 grid-rows-2 w-full h-[calc(100%-5rem)]">
          <DonutChart />
          <ResultsAnnounce />
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default results;

const ResultsAnnounce = () => {
  const textVariant = (text: string) => (
    <span className="text-btnColor">{text}</span>
  );

  return (
    <div className="col-start-2 row-start-1 flex flex-col gap-6 pt-5 font-semibold">
      <span className="font-bold text-3xl text-btnColor">결과 안내</span>
      <div>
        {textVariant("email1@gmail.com")}
        님의 이산화탄소(CO₂) 발생량 통계입니다.
      </div>
      <div>
        {textVariant("email1@gmail.com")}
        님은 이산화탄소 배출량은 총 {textVariant("37.3kg")} 이며, 평균 가정
        {textVariant("307.1kg")} 보다 약 {textVariant("-90%")} 더 적게 배출하고
        있습니다."
      </div>
    </div>
  );
};
