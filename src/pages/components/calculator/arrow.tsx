import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

const Arror = ({ left, onClick }: { left: boolean; onClick: () => void }) => {
  const [isHover, setIsHover] = useState(false);
  const divStyle =
    "flex cursor-pointer items-center justify-center px-6 py-4 rounded-lg shadow-md border border-btnColor border-opacity-45 hover:border-none";

  return (
    <AnimatePresence>
      <motion.div
        onClick={onClick}
        whileHover={{
          backgroundColor: "rgba(0 139 139 0.75)",
        }}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        className={divStyle}
      >
        {isHover ? (
          <motion.span
            key="hover"
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", delay: 0.25, duration: 0.1 }}
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
            <ArrorSvg left={left} />
          </motion.span>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Arror;

const ArrorSvg = ({ left }: { left: boolean }) => {
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
