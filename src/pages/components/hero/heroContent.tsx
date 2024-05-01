import { useRef, useState } from "react";

import {
  useMotionValueEvent,
  useScroll,
  motion,
  useInView,
} from "framer-motion";

import Button from "../ui/button";
import cls from "@/libs/utils";

interface IHeroContentProps {
  id: string;
  hero: JSX.Element;
  title?: string;
  description: string;
  spanOrButton: "span" | "button";
}

const HeroContent = ({
  id,
  hero,
  title,
  description,
  spanOrButton,
}: IHeroContentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  const [isPopUp, setIsPopUp] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress <= 0.85 && !isPopUp) {
      setIsPopUp(true);
    } else if (progress > 0.85 && isPopUp) {
      setIsPopUp(false);
    }
  });

  const isInView = useInView(svgRef, { once: true });

  return (
    <section className="h-[150vh] w-full p-0 m-0">
      <div
        id={id}
        ref={ref}
        className="flex items-center justify-center h-full"
      >
        <motion.div
          className={cls(
            "sticky flex items-center justify-center flex-col ",
            id === "3" ? "top-10 gap-6" : "top-36 gap-10"
          )}
        >
          <motion.div
            ref={svgRef}
            variants={divVariants}
            initial="start"
            animate={isInView ? "end" : ""}
            transition={{
              type: "tween",
              delay: id == "1" ? 0.5 : 0.75,
              duration: 0.5,
            }}
          >
            {hero}
          </motion.div>
          {spanOrButton === "span" ? (
            <TextSpan
              text={title || ""}
              isVisible={isPopUp}
              delay={!isPopUp ? 0.5 : 0}
              className={"text-4xl tracking-wider"}
            />
          ) : (
            <ButtonDiv isVisible={isPopUp} />
          )}
          <TextSpan
            text={description}
            isVisible={isPopUp}
            delay={isPopUp ? 0.5 : 0}
            className={"text-xl opacity-60"}
          />
        </motion.div>
      </div>
    </section>
  );
};

interface TextSpanProps {
  text: string;
  isVisible: boolean;
  delay: number;
  className: string;
}

const TextSpan = ({ text, isVisible, delay, className }: TextSpanProps) => {
  return (
    <motion.span
      variants={spanVariants}
      initial="start"
      animate={isVisible ? "end" : ""}
      transition={{ delay, duration: 0.5 }}
      className={cls("font-bold", className)}
    >
      {text}
    </motion.span>
  );
};

const ButtonDiv = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.div
      variants={spanVariants}
      initial="start"
      animate={isVisible ? "end" : ""}
      transition={{ delay: !isVisible ? 0.5 : 0, duration: 0.5 }}
      className="-mt-24"
    >
      <Button btnTitle={"계산하기"} moveUrl={"/calculator"} />
    </motion.div>
  );
};

const spanVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const divVariants = {
  start: {
    opacity: 0,
    y: 30,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

export default HeroContent;
