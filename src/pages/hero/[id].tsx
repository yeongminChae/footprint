import { NextPage } from "next";
import { useRouter } from "next/router";
import { HeroContent, sharedSpan } from "../components/hero/heroText";
import Hero1 from "../components/hero/hero1";
import Hero2 from "../components/hero/hero2";
import Hero3 from "../components/hero/hero3";
import Button from "../components/ui/button";

const HeroPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="w-screen h-screen bg-bgColor bg-center">
      <GetHeroComponent id={Number(id)} />
    </div>
  );
};

const GetHeroComponent = ({ id }: { id: number }) => {
  switch (id) {
    case 1:
      return HeroContent({
        hero: <Hero1 />,
        title: "우리의 일상이 만들어낸 그림자, 탄소 발자국",
        description:
          "우리가 매일 사용하는 에너지와 자원은 지구에 영향을 미칩니다.",
      });
    case 2:
      return HeroContent({
        hero: <Hero2 />,
        title: "작은 발자국이 모여 큰 위기를 만듭니다.",
        description: "지구 온난화와 자연재해는 우리 모두의 문제입니다.",
      });
    case 3:
      return (
        <div className="flex flex-col justify-center pt-14">
          <Hero3 />
          <div className="flex flex-col items-center gap-10 absolute bottom-[4.5rem] left-0 right-0 m-auto">
            {sharedSpan("당신의 작은 실천이 큰 변화를 만들 수 있습니다.")}
            <Button btnTitle={"계산하기"} moveUrl={"/calculator"} />
          </div>
        </div>
      );
    default:
      return <Hero1 />;
  }
};

export default HeroPage;
