import { useRouter } from "next/router";

import cls from "@/libs/utils";

interface ButtonProps {
  btnTitle: string;
  isActivate?: boolean;
  size?: "big" | "small";
  moveUrl?: string | undefined;
  onClick?: () => void;
}

const Button = ({
  btnTitle,
  isActivate = true,
  size = "big",
  moveUrl,
  onClick,
}: ButtonProps) => {
  const router = useRouter();

  const btnStyling = cls(
    constBtnStyle,
    size === "big" ? "w-[28rem] h-16" : "w-36 h-12"
  );

  const onBtnClick = () => {
    if (onClick) {
      onClick();
    } else if (moveUrl) {
      router.push(moveUrl);
    }
  };

  return (
    <div
      onClick={onBtnClick}
      className={cls(
        btnStyling,
        isActivate ? activeBtnStyle : unActiveBtnStyle
      )}
    >
      <span
        className={cls(
          size === "big" ? " text-xl font-bold" : "text-base font-semibold"
        )}
      >
        {btnTitle}
      </span>
    </div>
  );
};

const constBtnStyle =
  "transition-all ease-in duration-200 flex items-center justify-center rounded-lg ";

const activeBtnStyle =
  "bg-btnColor hover:bg-hoverColor cursor-pointer shadow-custom-shadow text-white";

const unActiveBtnStyle =
  "bg-unActiveBtnColor cursor-not-allowed shadow-lg text-black text-opacity-50";

export default Button;
