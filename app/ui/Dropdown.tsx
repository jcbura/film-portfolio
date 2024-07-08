"use client";

import clsx from "clsx";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { getTextColor } from "../lib/scripts";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  links: string[];
}

const Dropdown = ({ title, links }: Props) => {
  const pathname = usePathname();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5 px-4 py-2">
          {title}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-0 z-10 w-56 origin-top-right bg-white transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div>
          {links.map((link, index) => {
            const strippedLink = link.replace(/\s+/g, "");
            const constructedLink = `/${strippedLink}`;

            return (
              <MenuItem key={index}>
                <Link
                  href={constructedLink}
                  className={clsx(
                    "block px-4 py-2 hover:text-black",
                    getTextColor(constructedLink, [pathname]),
                    {
                      capitalize: link !== "imsa",
                      uppercase: link === "imsa",
                    }
                  )}
                >
                  {link}
                </Link>
              </MenuItem>
            );
          })}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default Dropdown;
