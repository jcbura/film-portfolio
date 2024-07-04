"use client";

import clsx from "clsx";
import Dropdown from "./Dropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-10 w-full h-14 flex justify-center bg-white">
      <div className="h-full w-2/3 flex justify-around items-center">
        <Link
          href="/home"
          className={clsx("hover:text-black px-4 py-2", {
            "text-black/50": !(pathname === "/" || pathname === "/home"),
            "text-black": pathname === "/" || pathname === "/home",
          })}
        >
          Home
        </Link>
        <div
          className={clsx("hover:text-black", {
            "text-black/50": !(
              pathname === "/formula1" || pathname === "/imsa"
            ),
            "text-black": pathname === "/formula1" || pathname === "/imsa",
          })}
        >
          <Dropdown title="Motorsport" links={["formula 1", "imsa"]} />
        </div>
        <div
          className={clsx("hover:text-black", {
            "text-black/50": !(
              pathname === "/barcelona" || pathname === "/rome"
            ),
            "text-black": pathname === "/barcelona" || pathname === "/rome",
          })}
        >
          <Dropdown title="Travel" links={["barcelona", "rome"]} />
        </div>
        <Link
          href="/about"
          className={clsx("hover:text-black", {
            "text-black/50": pathname !== "/about",
            "text-black": pathname === "/about",
          })}
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
