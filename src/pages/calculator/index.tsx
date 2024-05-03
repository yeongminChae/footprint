import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import cls from "@/libs/utils";
import Arrow, { DisabledBtn } from "../components/calculator/arrow";
import CalculatorForm, {
  formConfigs,
} from "../components/calculator/calculator";

const Calculator = () => {
  const [numAndIsPrev, setNumAndIsPrev] = useState({
    number: 1,
    isPrev: false,
  });

  const max = formConfigs.length;

  const toNext = () => {
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

  return (
    <div className={container}>
      {numAndIsPrev.number === 1 ? (
        <DisabledBtn text="Prev" />
      ) : (
        <Arrow onClick={toPrev} left={true} />
      )}

      <DivStacks />

      <AnimatePresence custom={numAndIsPrev.isPrev}>
        {formConfigs.map((config, idx) => {
          return numAndIsPrev.number === idx + 1 ? (
            <motion.div
              key={config.keyword}
              variants={slider}
              custom={numAndIsPrev.isPrev}
              initial="innumAndIsPrev"
              animate="numAndIsPrev"
              exit="exit"
              className="absolute z-10 place-items-center justify-center -translate-y-[0.1rem]"
            >
              <CalculatorForm
                title={config.title}
                inputTitle={config.inputTitle}
                co2={config.co2}
                units={config.units}
                keyword={config.keyword}
                key={config.keyword}
              />
            </motion.div>
          ) : null;
        })}
      </AnimatePresence>

      {numAndIsPrev.number === max ? (
        <DisabledBtn text="Next" />
      ) : (
        <Arrow onClick={toNext} left={false} />
      )}
    </div>
  );
};

export default Calculator;

const container =
  "relative w-screen h-screen overflow-hidden bg-bgColor bg-center flex items-center justify-around gap-[55rem]";

const DivStacks = () => {
  const stackStyle =
    "absolute rounded-lg border border-bordeColor shadow-xl h-[28rem] bg-white place-items-center";

  return (
    <>
      <div className={cls("opacity-70 w-[42rem] translate-y-10", stackStyle)} />
      <div className={cls("opacity-80 w-[44rem] translate-y-8", stackStyle)} />
      <div
        className={cls(
          "opacity-90 w-[46rem] translate-y-[1.35rem]",
          stackStyle
        )}
      />
    </>
  );
};

const slider = {
  innumAndIsPrev: (isPrev: boolean) => ({
    x: !isPrev ? 1500 : -1500,
    opacity: 0,
    scale: 0,
  }),
  numAndIsPrev: {
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
