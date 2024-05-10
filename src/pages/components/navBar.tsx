import { JSX, SVGProps, useState } from "react";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  return (
    <div className="z-10 fixed top-0 left-0 right-0 bg-white">
      <nav className="flex justify-between items-center px-5 border-b-2 border-borderColor h-16">
        <Link href="/">
          <LeafIcon
            style={{ width: "1.5rem", height: "1.5rem" }}
            strokeWidth="3"
          />
        </Link>
        <ul className="flex justify-between w-[30rem] items-center h-full">
          <LiTag title="Calculator" />
          <LiTag title="Recommendations" />
          <LiTag title="Challenges" />
          <LiTag title="Profile" />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

const LiTag = ({ title }: { title: string }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <motion.li
      onHoverStart={() => setOnHover(true)}
      onHoverEnd={() => setOnHover(false)}
      className="cursor-pointer font-bold"
    >
      {title}
      <div className="w-full h-0.5 flex">
        <AnimatedDiv key={1} isRight={false} visible={onHover} />
        <AnimatedDiv key={2} isRight={true} visible={onHover} />
      </div>
    </motion.li>
  );
};

const AnimatedDiv = ({
  key,
  isRight,
  visible,
}: {
  key: number;
  isRight: boolean;
  visible: boolean;
}) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={key}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.3 }}
          className="w-1/2  opacity-80 bg-btnColor"
          style={{ originX: isRight ? 0 : 1 }}
        />
      )}
    </AnimatePresence>
  );
};

export const LeafIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
  // svg에서 위처럼 props를 받아오면, 이를 이용하여 svg의 속성을 부모 컴포넌트에서 설정할 수 있다.
) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="cursor-pointer fill-none stroke-[#98D7C2]"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
};
