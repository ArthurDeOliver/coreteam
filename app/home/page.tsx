"use client";

import { LogoPage } from "@/app/components/logo/page";
import { FaHome } from "react-icons/fa";
import { AsideNav } from "../components/aside/page";
import Image from "next/image";

const HomePage = () => {
  return (
    <main className="flex flex-col ">
      <header className="w-full p-4">
        <LogoPage />
      </header>

      <div className="flex gap-5 p-2">
        <AsideNav />
        <div className="w-full bg-bg-page-950 p-4 rounded-md flex flex-col gap-6">
          <h1 className=" text-2xl text-primary-color-500 flex items-center gap-2 pb-2 border-b-2 border-gray-900">
            <FaHome size={35} />
            Home
          </h1>
          <div className="flex justify-center items-center w-full flex-col gap-5 py-4">
            <Image
              alt="imagem home"
              width={200}
              height={100}
              src="/assets/worker.png"
            />
            <p className="text-font-primary-700 max-w-md text-center">
              Bem vindo a plataforma CoreTeam! Cadastre funcionários, gerencie
              times de desenvolvimento tudo aqui!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
