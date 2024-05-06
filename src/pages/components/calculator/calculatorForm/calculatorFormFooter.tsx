import { useRef } from "react";

import { useInView, motion } from "framer-motion";

import cls from "@/libs/utils";
import Button from "../../ui/button";
import { borderOpacity40, flexCenter_Justify } from "../calculator";

interface iCalculatorFormFooter {
  id: number;
  usage: string;
  keyword: string;
  onClick: () => void;
}

const CalculatorFormFooter = ({
  id,
  usage,
  keyword,
  onClick,
}: iCalculatorFormFooter) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="w-full grid grid-cols-3 justify-center">
      <motion.div
        ref={ref}
        key="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className={cls(flexCenter_Justify, "col-start-2 col-span-1")}
        style={{ display: id === 4 ? "" : "none" }}
      >
        <Button
          btnTitle={"제출"}
          onClick={onClick}
          isActivate={usage === "" ? false : true}
          size="small"
        />
      </motion.div>

      <div
        className={cls(
          borderOpacity40,
          flexCenter_Justify,
          "border w-32 h-9 rounded-full self-center place-self-end col-start-3"
        )}
      >
        <span className="text-xs">{keyword} CO₂ 발생량</span>
      </div>
    </div>
  );
};

export default CalculatorFormFooter;
