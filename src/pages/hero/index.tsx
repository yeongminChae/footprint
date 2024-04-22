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

interface IContentHeroProps {
  scrollYProgressProps: MotionValue<number>;
  // hero: JSX.Element;
  // title?: string;
  // description: string;
  // className?: string;
}

const HeroPage: NextPage = () => {
  const { scrollYProgress } = useScroll({});

  return (
    <div className="w-full bg-bgColor ">
      <div className="h-36" />
      <div className="flex flex-col gap-10">
        <HeroContentHero1
          scrollYProgressProps={scrollYProgress}
          // hero={<Hero1 />}
          // title={"우리의 일상이 만들어낸 그림자, 탄소 발자국"}
          // description={
          //   "우리가 매일 사용하는 에너지와 자원은 지구에 영향을 미칩니다."
          // }
        />
        <HeroContentHero2 scrollYProgressProps={scrollYProgress} />
        <HeroContentHero3 scrollYProgressProps={scrollYProgress} />

        <div className="h-[100vh]" />
      </div>
    </div>
  );
};

export default HeroPage;

const HeroContentHero1 = ({
  scrollYProgressProps,
  // hero,
  // title,
  // description,
}: IContentHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({});
  const [sticky, setSticky] = useState({ isSticky: true, top: 0 });

  useMotionValueEvent(scrollYProgressProps, "change", (progress) => {
    const percent = 0.14;
    if (progress >= percent && sticky.isSticky) {
      setSticky({
        isSticky: false,
        top: scrollY.get(),
      });
    } else if (progress < percent && !sticky.isSticky) {
      setSticky({
        isSticky: true,
        top: scrollY.get() * percent,
      });
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cls(
        sticky.isSticky ? "sticky top-36" : "relative",
        "grid grid-rows-4 max-h-[125vh] justify-center border-2 border-red-400"
      )}
      style={{ top: sticky.isSticky ? "" : `${sticky.top}px` }}
    >
      <motion.div className="">
        <Hero1 />
      </motion.div>
      {/* <motion.div className="">{hero}</motion.div> */}

      <motion.div className="flex flex-col items-center justify-center gap-5 pt-64 ">
        <span className="text-4xl font-bold tracking-wider">
          {/* {title} */}
          {"우리의 일상이 만들어낸 그림자, 탄소 발자국"}
        </span>
        <span className="text-xl font-bold opacity-60">
          {/* {description} */}
          {"우리가 매일 사용하는 에너지와 자원은 지구에 영향을 미칩니다."}
        </span>
      </motion.div>
    </motion.div>
  );
};

const HeroContentHero2 = ({ scrollYProgressProps }: IContentHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({});
  const [sticky, setSticky] = useState({ isSticky: true, top: 0 });

  useMotionValueEvent(scrollYProgressProps, "change", (progress) => {
    const percent = 0.4;
    if (progress >= percent && sticky.isSticky) {
      setSticky({
        isSticky: false,
        top: (scrollY.get() * percent) / 2.55,
      });
    } else if (progress < percent && !sticky.isSticky) {
      setSticky({
        isSticky: true,
        top: (scrollY.get() * percent) / 2.55,
      });
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cls(
        sticky.isSticky ? "sticky top-36" : "relative",
        "grid grid-rows-4 max-h-[125vh] justify-center border-2 border-red-400"
      )}
      style={{ top: sticky.isSticky ? "" : `${sticky.top}px` }}
    >
      <motion.div className="">
        <Hero2 />
      </motion.div>

      <motion.div className="flex flex-col items-center justify-center gap-5 pt-64 ">
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

const HeroContentHero3 = ({ scrollYProgressProps }: IContentHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({});
  const [sticky, setSticky] = useState({ isSticky: true, top: 0 });

  useMotionValueEvent(scrollYProgressProps, "change", (progress) => {
    const percent = 0.9;
    console.log(progress);
    console.log(scrollY.get());
    if (progress >= percent && sticky.isSticky) {
      setSticky({
        isSticky: false,
        top: scrollY.get() * 0.325,
      });
    } else if (progress < percent && !sticky.isSticky) {
      setSticky({
        isSticky: true,
        top: scrollY.get() * 0.325,
      });
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cls(
        "grid h-[100vh] grid-rows-4 border-2 border-red-400 sticky top-36"
      )}
    >
      <motion.div className="">
        <Hero3 />
      </motion.div>

      <motion.div className="self-center flex flex-col items-center justify-center gap-5 pt-64 ">
        <span className="text-xl font-bold opacity-60">
          {"당신의 작은 실천이 큰 변화를 만들 수 있습니다."}
        </span>
        <Button btnTitle={"계산하기"} moveUrl={"/calculator"} />
      </motion.div>
    </motion.div>
  );
};
