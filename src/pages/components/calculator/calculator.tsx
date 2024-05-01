import cls from "@/libs/utils";
import Button from "../ui/button";

interface iCalculaotrFormProps {
  title: string;
  inputTitle: string;
  co2: string;
  units: string;
}

const CalculatorForm = ({
  title,
  inputTitle,
  co2,
  units,
}: iCalculaotrFormProps) => {
  return (
    <div className="w-screen h-screen bg-bgColor bg-center flex items-center justify-center">
      <section className="w-[48rem] h-[28rem] mt-7 bg-white rounded-2xl border border-bordeColor shadow-xl">
        <div className="h-20 px-7 flex flex-col justify-center border-b border-borderColor">
          <span className="text-xl font-bold tracking-wide">{title}</span>
        </div>

        <div className="px-10 pt-3 flex flex-col h-[calc(100%-5rem)] justify-center items-end gap-14">
          <div className="flex w-full justify-between items-center gap-5">
            <span className="text-lg font-medium">{inputTitle} 사용량</span>
            <input
              className={cls(
                sharedStyles,
                "text-end outline-none appearance-none text-sm placeholder:text-sm placeholder:right-4 placeholder:absolute"
              )}
              placeholder="사용량을 입력해주세요..."
              type="number"
            />
            <span className="text-xs w-12 font-medium">{units} / 월</span>
          </div>

          <div className="flex w-full justify-between items-center gap-5">
            <span className="text-lg font-medium">CO₂ 발생량</span>
            <div className={cls(sharedStyles, "flex items-center justify-end")}>
              <span className="text-sm opacity-50 tracking-widest">{co2}</span>
            </div>
            <span className="text-xs w-12 font-medium">kg / 월</span>
          </div>

          <Button btnTitle={"다음"} moveUrl={"/"} size="small" />
        </div>
      </section>
    </div>
  );
};

export default CalculatorForm;

const sharedStyles = "border border-borderColor flex-grow h-11 rounded-lg pr-4";
