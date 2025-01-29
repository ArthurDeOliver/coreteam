"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";

export const AsideNav = () => {
  const pathname = usePathname();
  return (
    <aside className="p-4 rounded-lg bg-bg-page-950 h-fit">
      <ul className="flex justify-center gap-5 flex-col">
        <li className="w-full sm:w-fit">
          <Link
            href="/home"
            className={`${
              pathname === "/home"
                ? "bg-primary-color-600 flex justify-center md:justify-start rounded-full text-font-primary-200 transition-all"
                : "text-font-primary-200 flex justify-center sm:justify-start"
            } hover:bg-primary-color-800 flex items-center py-2 px-5 gap-3 rounded-full transition-all active:bg-primary-color-500`}
          >
            <FaHome size={25} />
            Home
          </Link>
        </li>
        <li className="w-full sm:w-fit ">
          <Link
            href="/employee"
            className={`${
              pathname === "/employee"
                ? "bg-primary-color-600 rounded-full flex justify-center sm:justify-start text-font-primary-200 transition-all"
                : "text-font-primary-200 flex justify-center sm:justify-start"
            } hover:bg-primary-color-800 flex items-center py-2 px-5 gap-3 rounded-full transition-all  active:bg-primary-color-500`}
          >
            <FaUserFriends size={25} />
            Funcionários
          </Link>
        </li>
        <li className="w-full sm:w-fit">
          <Link
            href="/teams"
            className={`${
              pathname === "/teams"
                ? "bg-primary-color-600 flex justify-center sm:justify-start rounded-full text-font-primary-200 transition-all"
                : "text-font-primary-200 flex justify-center sm:justify-start"
            } hover:bg-primary-color-800 flex items-center py-2 px-5 gap-3 rounded-full transition-all  active:bg-primary-color-500`}
          >
            <TiGroup size={25} />
            Times
          </Link>
        </li>
      </ul>
    </aside>
  );
};
