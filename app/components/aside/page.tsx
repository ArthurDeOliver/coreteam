"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

export const AsideNav = () => {
  const pathname = usePathname();
  return (
    <aside className="p-4 rounded-lg bg-white shadow-md h-fit">
      <ul className="flex justify-center gap-4 flex-col">
        <li className="w-full sm:w-fit">
          <Link
            href="/home"
            className={`${
              pathname === "/home"
                ? "bg-blue-500 text-white flex justify-center md:justify-start rounded-full transition-all"
                : "text-gray-700 flex justify-center sm:justify-start"
            } hover:bg-blue-100 flex items-center py-2 px-5 gap-3 rounded-full transition-all active:bg-blue-200`}
          >
            <FaHome size={25} />
            Home
          </Link>
        </li>
        <li className="w-full sm:w-fit">
          <Link
            href="/employee"
            className={`${
              pathname === "/employee"
                ? "bg-blue-500 text-white flex justify-center sm:justify-start rounded-full transition-all"
                : "text-gray-700 flex justify-center sm:justify-start"
            } hover:bg-blue-100 flex items-center py-2 px-5 gap-3 rounded-full transition-all active:bg-blue-200`}
          >
            <FaUserFriends size={25} />
            Funcionários
          </Link>
        </li>
      </ul>
    </aside>
  );
};
