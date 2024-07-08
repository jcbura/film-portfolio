"use client";

import clsx from "clsx";
import Dropdown from "./Dropdown";
import Link from "next/link";
import { getTextColor } from "../lib/scripts";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-10 w-full h-14 flex justify-center bg-white">
      <div className="h-full w-2/3 flex justify-around items-center">
        <Link
          href="/home"
          className={clsx(
            "hover:text-black px-4 py-2",
            getTextColor(pathname, ["/", "/home"])
          )}
        >
          Home
        </Link>
        <div
          className={clsx(
            "hover:text-black",
            getTextColor(pathname, ["/formula1", "/imsa"])
          )}
        >
          <Dropdown title="Motorsport" links={["formula 1", "imsa"]} />
        </div>
        <div
          className={clsx(
            "hover:text-black",
            getTextColor(pathname, ["/barcelona", "/rome"])
          )}
        >
          <Dropdown title="Travel" links={["barcelona", "rome"]} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
