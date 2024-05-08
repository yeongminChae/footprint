import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useRecoilValue, useSetRecoilState } from "recoil";

import cls from "@/libs/utils";
import Arrow, { DisabledArrow } from "../components/calculator/arrow";
import CalculatorForm from "../components/calculator/calculator";
import { formConfigs } from "../components/calculator/formConfigs";
import { LeafIcon } from "../components/navBar";
import { co2Atom, co2DataAtom } from "@/libs/atoms";

const Calculator = () => {
  const [numAndIsPrev, setNumAndIsPrev] = useState({
    number: 1,
    isPrev: false,
  });
  const [formValid, setFormValid] = useState(false);
  const setCo2Data = useSetRecoilState(co2DataAtom);
  const co2 = useRecoilValue(co2Atom);

  const max = formConfigs.length;

  const toNext = () => {
    setCo2Data((prev) => ({
      ...prev,
      [formConfigs[numAndIsPrev.number - 1].keyword]: co2,
    }));
    setNumAndIsPrev((prev) => {
      const newNumber = prev.number === max ? max : prev.number + 1;
      return { ...prev, number: newNumber, isPrev: false };
    });
  };

  const toPrev = () => {
    setNumAndIsPrev((prev) => {
      const newNumber = prev.number === 1 ? 1 : prev.number - 1;
      return { ...prev, number: newNumber, isPrev: true };
    });
  };

  const isFormValid = (isValid: boolean) => {
    setFormValid(isValid);
  };

  return (
    <div className="w-screen h-screen bg-bgColor bg-center flex flex-col">
      <div className={container}>
        {numAndIsPrev.number === 1 ? (
          <DisabledArrow text="Prev" />
        ) : (
          <Arrow onClick={toPrev} left={true} />
        )}

        <DivStacks />

        <AnimatePresence custom={numAndIsPrev.isPrev}>
          {formConfigs.map((config, idx) =>
            numAndIsPrev.number === idx + 1 ? (
              <motion.div
                key={config.keyword}
                variants={slider}
                custom={numAndIsPrev.isPrev}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute z-10 place-items-center justify-center -translate-y-[0.1rem]"
              >
                <CalculatorForm
                  id={config.id}
                  key={config.keyword}
                  title={config.title}
                  inputTitle={config.inputTitle}
                  units={config.units}
                  keyword={config.keyword}
                  calcNum={config.calcNum}
                  types={config.types}
                  isFormValid={isFormValid}
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {numAndIsPrev.number === max || !formValid ? (
          <DisabledArrow text="Next" />
        ) : (
          <Arrow onClick={toNext} left={false} />
        )}
      </div>
    </div>
  );
};

export default Calculator;

const container =
  "relative w-full h-full overflow-hidden flex items-center justify-around gap-[55rem]";

const DivStacks = () => {
  const stackStyle =
    "absolute rounded-lg border shadow-xl h-[28rem] bg-white place-items-center";

  return (
    <>
      <div className={cls("opacity-70 w-[42rem] translate-y-10", stackStyle)} />
      <div className={cls("opacity-80 w-[44rem] translate-y-8", stackStyle)} />
      <div
        className={cls(
          "opacity-90 w-[46rem] translate-y-[1.35rem]",
          stackStyle
        )}
      >
        <div className="w-full h-full flex items-center justify-center">
          <LeafIcon style={{ width: "5rem", height: "5rem" }} strokeWidth="2" />
        </div>
      </div>
    </>
  );
};

const slider = {
  initial: (isPrev: boolean) => ({
    x: !isPrev ? 1500 : -1500,
    opacity: 0,
    scale: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: (isPrev: boolean) => ({
    x: isPrev ? 1500 : -1500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
    },
  }),
};
