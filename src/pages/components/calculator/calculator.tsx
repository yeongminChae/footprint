import cls from "@/libs/utils";
import Button from "../ui/button";

interface iCalculaotrFormProps {
  title: string;
  inputTitle: string;
  co2: string;
  units: string;
  keyword: string;
  key: string;
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
      <form className={formStyle}>
        <div
          className={cls(
            borderOpacity40,
            "h-20 px-7 flex flex-col justify-center border-b"
          )}
        >
          <span className="text-xl font-bold tracking-wide">{title}</span>
        </div>

        <div className={inputStyle}>
          <div className={cls(flexCenter, "w-full justify-between gap-5")}>
            <span className="text-lg font-medium">{inputTitle}</span>
            <input
              className={cls(
                sharedStyles,
                placeHolderStyles,
                "text-sm text-end outline-none appearance-none "
              )}
              placeholder="사용량을 입력해주세요..."
              type="string"
            />
            <span className="text-xs w-12 font-medium">{units} / 월</span>
          </div>

          <div className={cls(flexCenter, "w-full justify-between gap-5")}>
            <span className="text-lg font-medium">CO₂ 발생량</span>
            <div className={cls(sharedStyles, flexCenter, "justify-end")}>
              <span className="text-sm opacity-50 tracking-widest">{co2}</span>
            </div>
            <span className="text-xs w-12 font-medium">kg / 월</span>
          </div>

          <div
            className={cls(
              borderOpacity40,
              flexCenter,
              "justify-center border px-4 py-2 rounded-full"
            )}
          >
            <span className="text-xs">{keyword} CO₂ 발생량</span>
          </div>
        </div>
      </form>
      {/* <div {cls(className="w-[48rem] pt-12 flex items-center justify-between")}>
        <Button btnTitle={"이전"} moveUrl={"/"} size="small" />
        <Button btnTitle={"다음"} moveUrl={"/"} size="small" />
      </div> */}
    </>
  );
};

export default CalculatorForm;

const formStyle =
  "w-[48rem] h-[28rem] text-btnColor mt-7 bg-white rounded-lg border border-bordeColor shadow-xl";

const inputStyle =
  "h-[calc(100%-5rem)] flex flex-col justify-center items-end gap-14 px-10 pt-3 ";

const sharedStyles =
  "flex-grow h-11 rounded-lg pr-4 border border-btnColor border-opacity-80";

const placeHolderStyles =
  "placeholder:text-btnColor placeholder:opacity-45 placeholder:text-sm placeholder:right-4 placeholder:absolute";

const borderOpacity40 = "border-btnColor border-opacity-45";

const flexCenter = "flex items-center";
