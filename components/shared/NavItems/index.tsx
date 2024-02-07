"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { headerLinks } from "@/constants";

const NavItems = () => {
  const pathname = usePathname();
  const isActive = (path: string) =>
    path === pathname || pathname.startsWith(`${path}/`);

  return (
    <ul className="flex flex-col gap-y-4 lg:justify-between lg:flex-row lg:gap-y-0 lg:gap-x-8 lg:items-center list-none">
      {headerLinks.map((link) => {
        return (
          <li key={link.id} className="w-fit">
            <Link
              href={link.route}
              className={`flex items-center gap-x-2 text-md hover:text-blue-500 hover:opacity-100 uppercase ${
                isActive(link.route)
                  ? "active text-blue-500 font-semibold opacity-100"
                  : "opacity-40"
              }`}
            >
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
