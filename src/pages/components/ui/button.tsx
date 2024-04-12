import cls from "@/libs/utils";
import { useRouter } from "next/router";

interface ButtonProps {
  btnTitle: string;
  moveUrl: string;
  isActivate?: boolean;
  size?: "big" | "small";
}

const Button = ({
  btnTitle,
  moveUrl,
  isActivate = true,
  size = "big",
}: ButtonProps) => {
  const router = useRouter();

  const btnStyling = cls(
    "transition-all ease-in duration-200 flex items-center justify-center shadow-custom-shadow rounded-lg ",
    size === "big" ? "w-[28rem] h-16" : "w-36 h-12"
  );

  const onBtnClick = () => {
    router.push(moveUrl);
  };

  return (
    <div
      onClick={onBtnClick}
      className={cls(
        btnStyling,
        isActivate
          ? "bg-btnColor hover:bg-hoverColor cursor-pointer"
          : "bg-unActiveBtnColor"
      )}
    >
      <span
        className={cls(
          "text-white font-bold",
          size === "big" ? " text-xl" : "text-base"
        )}
      >
        {btnTitle}
      </span>
    </div>
  );
};

export default Button;
