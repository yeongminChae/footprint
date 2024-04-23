import { motion } from "framer-motion";

import cls from "@/libs/utils";
import Button from "../ui/button";

export interface HeroContentProps {
  hero: JSX.Element;
  title?: string;
  description: string;
  className?: string;
  topValue?: string;
  spanOrButton: "span" | "button";
}
export function HeroContent({
  hero,
  title,
  description,
  className,
  topValue,
  spanOrButton,
}: HeroContentProps) {
  return (
    <motion.div
      className={cls(
        "flex flex-col items-center justify-center gap-20",
        className || ""
      )}
      style={{ top: topValue }}
    >
      <motion.div className={cls(spanOrButton === "span" ? "" : "self-start")}>
        {hero}
      </motion.div>
      <motion.div
        className={cls(
          "flex flex-col items-center justify-center gap-5",
          spanOrButton === "span" ? "" : "mt-[-12.5rem]"
        )}
      >
        {spanOrButton === "span" ? (
          <span className="text-4xl font-bold tracking-wider">{title}</span>
        ) : (
          <Button btnTitle={"계산하기"} moveUrl={"/calculator"} />
        )}
        <span className="text-xl font-bold opacity-60">{description}</span>
      </motion.div>
    </motion.div>
  );
}
