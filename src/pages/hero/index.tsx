import { NextPage } from "next";
import { useRef, useState } from "react";
import { MotionValue, useMotionValueEvent, useScroll } from "framer-motion";

import Hero1 from "../components/hero/hero1";
import Hero2 from "../components/hero/hero2";
import Hero3 from "../components/hero/hero3";
import { HeroContent } from "../components/hero/heroContent";

interface IContentScrollProps {
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
        <HeroContentHero3 />
        <div className="h-[50vh]" />
      </div>
    </div>
  );
};

export default HeroPage;

const useStickyState = (
  { scrollYProgressProps, scrollYProps }: IContentScrollProps,
  { threshold, top }: { threshold: number; top: number }
) => {
  const [sticky, setSticky] = useState({ isSticky: true, top: 0 });

  useMotionValueEvent(scrollYProgressProps, "change", (progress) => {
    if (progress >= threshold && sticky.isSticky) {
      setSticky({ isSticky: false, top: top });
    } else if (progress < threshold && !sticky.isSticky) {
      setSticky({ isSticky: true, top: top });
    }
  });

  return sticky;
};

const HeroContentHero1 = ({
  scrollYProgressProps,
  scrollYProps,
}: IContentScrollProps) => {
  const sticky = useStickyState(
    {
      scrollYProgressProps,
      scrollYProps,
    },
    { threshold: 0.15, top: scrollYProps.get() }
  );

  return (
    <HeroContent
      hero={<Hero1 />}
      title={"우리의 일상이 만들어낸 그림자, 탄소 발자국"}
      description={
        "우리가 매일 사용하는 에너지와 자원은 지구에 영향을 미칩니다."
      }
      className={sticky.isSticky ? "sticky top-36" : "relative"}
      topValue={sticky.isSticky ? "" : `${sticky.top}px`}
      spanOrButton={"span"}
      scrollYProgressProps={scrollYProgressProps}
    />
  );
};

const HeroContentHero2 = ({
  scrollYProgressProps,
  scrollYProps,
}: IContentScrollProps) => {
  const sticky = useStickyState(
    {
      scrollYProgressProps,
      scrollYProps,
    },
    { threshold: 0.52, top: 450 }
  );

  return (
    <HeroContent
      hero={<Hero2 />}
      title={"작은 발자국이 모여 큰 위기를 만듭니다."}
      description={"지구 온난화와 자연재해는 우리 모두의 문제입니다."}
      className={sticky.isSticky ? "sticky top-36" : "relative"}
      topValue={sticky.isSticky ? "" : `${sticky.top}px`}
      spanOrButton={"span"}
      scrollYProgressProps={scrollYProgressProps}
    />
  );
};

const HeroContentHero3 = () => {
  return (
    <HeroContent
      hero={<Hero3 />}
      description={"당신의 작은 실천이 큰 변화를 만들 수 있습니다."}
      className={"sticky top-36"}
      spanOrButton={"button"}
    />
  );
};
