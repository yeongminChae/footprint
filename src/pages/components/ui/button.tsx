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
    "transition-all ease-in duration-200 flex items-center justify-center shadow-custom-shadow rounded-lg ",
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
