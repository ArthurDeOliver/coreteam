"use client";

import { LogoPage } from "@/app/components/logo/page";
import { AsideNav } from "../components/aside/page";
import { TiGroup } from "react-icons/ti";

const TeamsPage = () => {
  return (
    <main className="flex flex-col">
      <header className="w-full p-4">
        <LogoPage />
      </header>

      <div className="flex flex-col sm:flex-row gap-5 p-2">
        <AsideNav />
        <div className="w-full bg-bg-page-950 p-4 rounded-md flex flex-col gap-6">
          <h1 className=" text-2xl text-primary-color-500 flex items-center gap-2 pb-2 border-b-2 border-gray-900">
            <TiGroup size={35} />
            Times
          </h1>
        </div>
      </div>
    </main>
  );
};

export default TeamsPage;
