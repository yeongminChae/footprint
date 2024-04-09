import Link from "next/link";
import { JSX, SVGProps } from "react";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white">
      <nav className="flex justify-between items-center px-5 border-b-2 border-borderColor h-16">
        <Link href="/">
          <LeafIcon />
        </Link>
        <ul className="flex justify-between w-[30rem] items-center h-full">
          <li className="cursor-pointer font-bold hover:underline underline-offset-4 transition ease-in-out duration-300">
            Calculator
          </li>
          <li className="cursor-pointer font-bold hover:underline underline-offset-4 transition ease-in-out duration-300">
            Recommendations
          </li>
          <li className="cursor-pointer font-bold hover:underline underline-offset-4 transition ease-in-out duration-300">
            Challenges
          </li>
          <li className="cursor-pointer font-bold hover:underline underline-offset-4 transition ease-in-out duration-300">
            Profile
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

function LeafIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="cursor-pointer h-6 fill-none w-6 stroke-[#98D7C2]"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
