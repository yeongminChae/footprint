import cls from "@/libs/utils";
import Button from "../ui/button";

interface iCalculaotrFormProps {
  title: string;
  inputTitle: string;
  co2: string;
  units: string;
  keyword: string;
}

const CalculatorForm = ({
  title,
  inputTitle,
  co2,
  units,
  keyword,
}: iCalculaotrFormProps) => {
  return (
    <>
      <section className="w-[48rem] h-[28rem] text-btnColor  mt-7 bg-white rounded-lg border border-bordeColor shadow-xl">
        <div className="h-20 px-7 flex flex-col justify-center border-b border-btnColor border-opacity-45">
          <span className="text-xl font-bold tracking-wide">{title}</span>
        </div>

        <div className="px-10 pt-3 flex flex-col h-[calc(100%-5rem)] justify-center items-end gap-14">
          <div className="flex w-full justify-between items-center gap-5">
            <span className="text-lg font-medium">{inputTitle}</span>
            <input
              className={cls(
                sharedStyles,
                "border-btnColor border-opacity-80 text-sm text-end outline-none appearance-none placeholder:text-btnColor placeholder:opacity-45 placeholder:text-sm placeholder:right-4 placeholder:absolute"
              )}
              placeholder="사용량을 입력해주세요..."
              type="number"
            />
            <span className="text-xs w-12 font-medium">{units} / 월</span>
          </div>

          <div className="flex w-full justify-between items-center gap-5">
            <span className="text-lg font-medium">CO₂ 발생량</span>
            <div
              className={cls(
                sharedStyles,
                "border-btnColor border-opacity-80 flex items-center justify-end"
              )}
            >
              <span className="text-sm opacity-50 tracking-widest">{co2}</span>
            </div>
            <span className="text-xs w-12 font-medium">kg / 월</span>
          </div>

          <div className="flex items-center justify-center border border-btnColor border-opacity-45 px-4 py-2 rounded-full">
            <span className="text-xs">{keyword} CO₂ 발생량</span>
          </div>
        </div>
      </section>
      {/* <div className="w-[48rem] pt-12 flex items-center justify-between">
        <Button btnTitle={"이전"} moveUrl={"/"} size="small" />
        <Button btnTitle={"다음"} moveUrl={"/"} size="small" />
      </div> */}
    </>
  );
};

export default CalculatorForm;

const sharedStyles = "border border-borderColor flex-grow h-11 rounded-lg pr-4";

export const formConfigs = [
  {
    title: "전기 CO₂ 발생량",
    inputTitle: "전기 사용량",
    co2: (0.0).toFixed(1),
    units: "kwh",
    keyword: "전기",
  },
  {
    title: "가스 CO₂ 발생량",
    inputTitle: "가스 사용량",
    co2: (0.0).toFixed(1),
    units: "m³",
    keyword: "가스",
  },
  {
    title: "수도 CO₂ 발생량",
    inputTitle: "수도 사용량",
    co2: (0.0).toFixed(1),
    units: "m³",
    keyword: "수도",
  },
  {
    title: "교통 CO₂ 발생량",
    inputTitle: "교통 사용량",
    co2: (0.0).toFixed(1),
    units: "km",
    keyword: "교통",
  },
  {
    title: "생활 폐기물 CO₂ 발생량",
    inputTitle: "폐기물 배출량",
    co2: (0.0).toFixed(1),
    units: "kg",
    keyword: "폐기물",
  },
];
