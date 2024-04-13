// cls 함수는, state여부에 따라서 달라지는 classname을 한 번에 작성할 수 있게 해줍니다.
// ex)
// <a className={cls(
//     "flex flex-col items-center space-y-2 ",
//     router.pathname === "/profile"
//       ? "text-orange-500"
//       : "transition-colors hover:text-gray-500"
//   )}
// >
export default function cls(...className: string[]) {
  return className.join(" ");
}
