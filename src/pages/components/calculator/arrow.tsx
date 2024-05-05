import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import cls from "@/libs/utils";

const Arrow = ({ left, onClick }: { left: boolean; onClick: () => void }) => {
  const [isHover, setIsHover] = useState(false);
  const divStyle = cls(
    sharedbtnStyle,
    "cursor-pointer border border-btnColor border-opacity-45 hover:border-transparent"
  );

  return (
    <AnimatePresence>
      <motion.div
        onClick={onClick}
        whileHover={{
          backgroundColor: "rgba(0 139 139 0.75)",
        }}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={divStyle}
      >
        {isHover ? (
          <motion.span
            key="hover"
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", delay: 0.1, duration: 0.1 }}
            className="text-bgColor"
          >
            {left ? "Prev" : "Next"}
          </motion.span>
        ) : (
          <motion.span
            key="not-hover"
            initial={{ opacity: 1 }}
            exit={{ x: -50, opacity: 0, transition: { duration: 0.3 } }}
            transition={{ type: "tween" }}
          >
            <ArrowSvg left={left} />
          </motion.span>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Arrow;

export const DisabledArrow = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 0.5 }}
      className={cls(
        sharedbtnStyle,
        "border cursor-not-allowed bg-borderColor"
      )}
    >
      {text}
    </motion.div>
  );
};

const sharedbtnStyle =
  "flex items-center justify-center w-20 py-4 rounded-lg shadow-md";

const ArrowSvg = ({ left }: { left: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      className="w-6 h-6 stroke-btnColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={
          !left
            ? "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            : "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        }
      />
    </svg>
  );
};
