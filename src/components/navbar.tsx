import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

const Navbar = () => {
  return (
    <header className=" w-full">
      <nav className="flex items-center justify-between p-2">
        <Link href="/">LOGO</Link>
        <div className="flex items-center justify-center gap-10">
          <Link href="/experience" className="font-semibold text-base text-white">
            Experience
          </Link>
        </div>
        <ThemeSwitcher />
      </nav>
    </header>
  );
};
// const Navbar = () => {
//   return (
//     <header className="fixed left-0 right-0 p-4 z-50">
//       <nav className="flex items-center justify-between">
//         <Link href="/">LOGO</Link>
//         <div className="flex items-center justify-center gap-10">
//           <Link href="/experience" className="font-semibold text-base text-white">
//             Experience
//           </Link>
//         </div>
//         <ThemeSwitcher />
//       </nav>
//     </header>
//   );
// };
export default Navbar;
