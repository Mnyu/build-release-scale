import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

const Navbar = () => {
  return (
    <nav className="border border-gray-300 p-4 flex items-center justify-between">
      <Link href="/">LOGO</Link>
      <ThemeSwitcher />
    </nav>
  );
};
export default Navbar;
