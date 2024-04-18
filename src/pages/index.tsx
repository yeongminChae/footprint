import NavBar from "./components/navBar";
import Button from "./components/ui/button";

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen bg-bgColor">
        <section className="flex flex-col items-center gap-20">
          <div className="flex flex-col items-center pt-44 gap-11">
            <h1 className="text-5xl font-bold tracking-wide">
              일상에서 내 탄소 발자국 계산해보기
            </h1>
            <span className="opacity-60 w-[31rem] text-center">
              나의 일상 활동을 통해 발생하는 탄소 배출량을 측정하고, 어떻게 줄일
              수 있는지 알아보기
            </span>
          </div>

          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-5">
              <span className="opacity-60">Email을 입력해 주세요.</span>
              <input
                type="text"
                placeholder="Email"
                className="w-[28rem] h-[4rem] pl-3 rounded-lg outline-none ring ring-borderColor focus:ring-btnColor"
              />
            </div>
            <Button
              btnTitle={"시작하기"}
              moveUrl={"/hero/1"}
              isActivate={true}
            />
          </div>
        </section>
      </main>
    </>
  );
}
