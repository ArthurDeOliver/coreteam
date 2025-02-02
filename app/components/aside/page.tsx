"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";

export const AsideNav = () => {
  const pathname = usePathname();
  return (
    <aside className="p-4 rounded-lg bg-white shadow-md xl:sticky top-4 h-fit">
      <ul className="flex justify-center gap-4 flex-col">
        <li className="w-full sm:w-full">
          <Link
            href="/home"
            className={`${
              pathname === "/home"
                ? "bg-blue-500 text-white hover:bg-blue-60  flex justify-center md:justify-start rounded-full transition-all"
                : "text-gray-700 flex hover:bg-blue-300  justify-center sm:justify-start"
            }  w-full flex items-center  py-2 px-5 gap-3 rounded-full transition-all active:bg-blue-400`}
          >
            <FaHome size={25} />
            Home
          </Link>
        </li>
        <li className="w-full sm:w-full">
          <Link
            href="/employee"
            className={`${
              pathname === "/employee"
                ? "bg-blue-500 text-white hover:bg-blue-60  flex justify-center md:justify-start rounded-full transition-all"
                : "text-gray-700 flex hover:bg-blue-300  justify-center sm:justify-start"
            }  w-full flex items-center  py-2 px-5 gap-3 rounded-full transition-all active:bg-blue-400`}
          >
            <FaUserFriends size={25} />
            Funcionários
          </Link>
        </li>
        <li className="w-full sm:w-full">
          <Link
            href="/team"
            className={`${
              pathname === "/team"
                ? "bg-blue-500 text-white hover:bg-blue-60  flex justify-center md:justify-start rounded-full transition-all"
                : "text-gray-700 flex hover:bg-blue-300  justify-center sm:justify-start"
            }  w-full flex items-center  py-2 px-5 gap-3 rounded-full transition-all active:bg-blue-400`}
          >
            <TiGroup size={25} />
            Equipes
          </Link>
        </li>
      </ul>
    </aside>
  );
};
