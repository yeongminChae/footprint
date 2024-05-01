import { NextPage } from "next";

import Hero1 from "../components/hero/hero1";
import Hero2 from "../components/hero/hero2";
import Hero3 from "../components/hero/hero3";
import HeroContent from "../components/hero/heroContent";

const HeroPage: NextPage = () => {
  return (
    <div className="w-full h-max bg-bgColor bg-centers">
      <HeroContent
        id="1"
        hero={<Hero1 />}
        title={"우리의 일상이 만들어낸 그림자, 탄소 발자국"}
        description={
          "우리가 매일 사용하는 에너지와 자원은 지구에 영향을 미칩니다."
        }
        spanOrButton={"span"}
      />
      <HeroContent
        id="2"
        hero={<Hero2 />}
        title={"작은 발자국이 모여 큰 위기를 만듭니다."}
        description={"지구 온난화와 자연재해는 우리 모두의 문제입니다."}
        spanOrButton={"span"}
      />
      <HeroContent
        id="3"
        hero={<Hero3 />}
        description={"당신의 작은 실천이 큰 변화를 만들 수 있습니다."}
        spanOrButton={"button"}
      />
    </div>
  );
};

export default HeroPage;
