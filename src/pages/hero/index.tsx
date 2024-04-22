import { NextPage } from "next";
import { useRef, useState } from "react";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import Hero1 from "../components/hero/hero1";
import Hero2 from "../components/hero/hero2";
import Hero3 from "../components/hero/hero3";
import cls from "@/libs/utils";

import Button from "../components/ui/button";
import { HeroContent } from "../components/hero/heroContent";

interface IContentHeroProps {
  scrollYProgressProps: MotionValue<number>;
  scrollYProps: MotionValue<number>;
}

const HeroPage: NextPage = () => {
  const { scrollYProgress, scrollY } = useScroll({});

  return (
    <div className="w-full bg-bgColor bg-centers">
      <div className="h-36" />
      <div className="flex flex-col gap-[30rem]">
        <HeroContentHero1
          scrollYProgressProps={scrollYProgress}
          scrollYProps={scrollY}
        />
        <HeroContentHero2
          scrollYProgressProps={scrollYProgress}
          scrollYProps={scrollY}
        />
        <HeroContentHero3
          scrollYProgressProps={scrollYProgress}
          scrollYProps={scrollY}
        />

        <div className="h-[50vh]" />
      </div>
    </div>
  );
};

export default HeroPage;

const HeroContentHero1 = ({
  scrollYProgressProps,
  scrollYProps,
}: IContentHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [sticky, setSticky] = useState({ isSticky: true, top: 0 });

  useMotionValueEvent(scrollYProgressProps, "change", (progress) => {
    const percent = 0.15;
    console.log(`first progress: ${progress}`);
    console.log(`first scrollYProps.get(): ${scrollYProps.get()}`);
    if (progress >= percent && sticky.isSticky) {
      setSticky({ isSticky: false, top: 450 });
    } else if (progress < percent && !sticky.isSticky) {
      setSticky({ isSticky: true, top: 450 });
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cls(
        sticky.isSticky ? "sticky top-36" : "relative",
        "flex flex-col items-center justify-center gap-20"
      )}
      style={{ top: sticky.isSticky ? "" : `${sticky.top}px` }}
    >
      <motion.div className="">
        <Hero1 />
      </motion.div>

      <motion.div className="flex flex-col items-center justify-center gap-5 ">
        <span className="text-4xl font-bold tracking-wider">
          {"우리의 일상이 만들어낸 그림자, 탄소 발자국"}
        </span>
        <span className="text-xl font-bold opacity-60">
          {"우리가 매일 사용하는 에너지와 자원은 지구에 영향을 미칩니다."}
        </span>
      </motion.div>
    </motion.div>
  );
};

const HeroContentHero2 = ({
  scrollYProgressProps,
  scrollYProps,
}: IContentHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [sticky, setSticky] = useState({ isSticky: true, top: 0 });

  useMotionValueEvent(scrollYProgressProps, "change", (progress) => {
    const percent = 0.52;
    console.log(`sec progress: ${progress}`);
    console.log(`sec scrollYProps.get(): ${scrollYProps.get()}`);
    if (progress >= percent && sticky.isSticky) {
      setSticky({ isSticky: false, top: 450 });
    } else if (progress < percent && !sticky.isSticky) {
      setSticky({ isSticky: true, top: 450 });
    }
  });
  return (
    <motion.div
      ref={ref}
      className={cls(
        sticky.isSticky ? "sticky top-36" : "relative",
        "flex flex-col items-center justify-center gap-20"
      )}
      style={{ top: sticky.isSticky ? "" : `${sticky.top}px` }}
    >
      <motion.div className="">
        <Hero2 />
      </motion.div>

      <motion.div className="flex flex-col items-center justify-center gap-5">
        <span className="text-4xl font-bold tracking-wider">
          {"작은 발자국이 모여 큰 위기를 만듭니다."}
        </span>
        <span className="text-xl font-bold opacity-60">
          {"지구 온난화와 자연재해는 우리 모두의 문제입니다."}
        </span>
      </motion.div>
    </motion.div>
  );
};

const HeroContentHero3 = ({
  scrollYProgressProps,
  scrollYProps,
}: IContentHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [sticky, setSticky] = useState({ isSticky: true, top: 0 });

  useMotionValueEvent(scrollYProgressProps, "change", (progress) => {
    console.log(`third progress: ${progress}`);
    console.log(`third scrollYProps.get(): ${scrollYProps.get()}`);
  });

  return (
    <motion.div
      ref={ref}
      className={cls(
        sticky.isSticky ? "sticky top-36" : "relative",
        "flex flex-col items-center justify-center gap-20"
      )}
      style={{ top: sticky.isSticky ? "" : `${sticky.top}px` }}
    >
      <motion.div className="self-start">
        <Hero3 />
      </motion.div>

      <motion.div className="flex flex-col items-center justify-center gap-5 mt-[-12.5rem]">
        <span className="text-xl font-bold opacity-60">
          {"당신의 작은 실천이 큰 변화를 만들 수 있습니다."}
        </span>
        <Button btnTitle={"계산하기"} moveUrl={"/calculator"} />
      </motion.div>
    </motion.div>
  );
};
