import { motion, MotionValue, useTransform } from "framer-motion";

import cls from "@/libs/utils";
import Button from "../ui/button";

export interface HeroContentProps {
  hero: JSX.Element;
  title?: string;
  description: string;
  className?: string;
  topValue?: string;
  spanOrButton: "span" | "button";
  scrollYProgressProps?: MotionValue<number>;
}
export function HeroContent({
  hero,
  title,
  description,
  className,
  topValue,
  spanOrButton,
  scrollYProgressProps,
}: HeroContentProps) {
  const opacity = scrollYProgressProps
    ? useTransform(scrollYProgressProps, [0, 1], [1, 0])
    : 1;
  const scale = scrollYProgressProps
    ? useTransform(scrollYProgressProps, [0, 1], [1, 1.3])
    : 1;

  return (
    <motion.div
      className={cls(
        "flex flex-col items-center justify-center gap-20 h-[34.75rem]",
        className || ""
      )}
      style={{ top: topValue }}
    >
      <motion.div
        className={cls(spanOrButton === "span" ? "" : "self-start")}
        style={{ opacity }}
      >
        {hero}
      </motion.div>
      <div
        className={cls(
          "flex flex-col items-center justify-center gap-5",
          spanOrButton === "span" ? "" : "mt-[-12.5rem]"
        )}
      >
        {spanOrButton === "span" ? (
          <motion.span
            style={{ scale }}
            className="text-4xl font-bold tracking-wider"
          >
            {title}
          </motion.span>
        ) : (
          <Button btnTitle={"계산하기"} moveUrl={"/calculator"} />
        )}
        <motion.span style={{ scale }} className="text-xl font-bold opacity-60">
          {description}
        </motion.span>
      </div>
    </motion.div>
  );
}
