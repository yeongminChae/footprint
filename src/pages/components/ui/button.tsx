import { useRouter } from "next/router";

interface ButtonProps {
  btnTitle: string;
  moveUrl: string;
}

const Button = ({ btnTitle, moveUrl }: ButtonProps) => {
  const router = useRouter();
  const onBtnClick = () => {
    router.push(moveUrl);
  };
  return (
    <div
      onClick={onBtnClick}
      className="w-[28rem] h-[4rem] bg-btnColor transition-all ease-in duration-200 flex items-center justify-center cursor-pointer shadow-custom-shadow rounded-lg hover:bg-hoverColor"
    >
      <span className="text-white font-bold text-xl">{btnTitle}</span>
    </div>
  );
};

export default Button;
