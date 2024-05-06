import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import cls from "@/libs/utils";
import { flexCenter } from "../calculator";

interface iCalculatorCheckBox {
  id: number;
  reset: () => void;
  currentType: (type: string) => void;
  types?: string[];
}

const CalculatorFormCheckBox = ({
  id,
  reset,
  types,
  currentType,
}: iCalculatorCheckBox) => {
  const [type, setType] = useState(types ? types[0] : "");

  const setTypeFunc = (type: string) => {
    setType(type);
    reset();
  };

  useEffect(() => {
    currentType(type);
  }, [type, currentType]);

  return (
    <>
      {id >= 3 ? (
        <div className={cls(flexCenter, "w-full gap-4")}>
          <span className="w-28 text-lg font-medium">
            {id === 3 ? "승용차 종류" : "폐기물 단위"}
          </span>
          <div className="flex-grow flex items-center gap-20 mx-auto">
            {types?.map((i) => (
              <div
                key={i}
                onClick={() => setTypeFunc(i)}
                className="flex gap-3 cursor-pointer items-center "
              >
                <DivTag i={i} type={type} />
                <SpanTag i={i} type={type} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

const DivTag = ({ i, type }: { i: string; type: string }) => {
  return (
    <motion.div
      initial={{
        backgroundColor: "rgb(255, 255, 255)",
        opacity: 0,
      }}
      animate={{
        backgroundColor: type === i ? "rgb(0 139 139)" : "rgb(255, 255, 255)",
        opacity: type === i ? 0.8 : 1,
      }}
      transition={{ duration: 0.3 }}
      className="h-5 w-5 border-2 border-btnColor rounded-sm"
    />
  );
};

const SpanTag = ({ i, type }: { i: string; type: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: type != i ? 0.45 : 1 }}
      transition={{ duration: 0.5 }}
      className={cls(type === i ? "font-semibold" : "")}
    >
      {i}
    </motion.span>
  );
};

export default CalculatorFormCheckBox;
