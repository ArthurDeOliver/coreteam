"use client";

import { LogoPage } from "@/app/components/logo/page";
import { FaHome } from "react-icons/fa";
import { AsideNav } from "../components/aside/page";
import Image from "next/image";

const HomePage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <header className="w-full p-6 bg-white shadow-sm">
        <LogoPage />
      </header>

      <div className="flex flex-col sm:flex-row gap-6 p-6">
        <AsideNav />

        <div className="w-full bg-white p-6 rounded-xl shadow-lg flex flex-col gap-8">
          <h1 className="text-3xl text-gray-800 flex items-center gap-3 pb-4 border-b border-gray-200 font-montserrat font-semibold">
            <FaHome size={35} className="text-blue-600" />
            Home
          </h1>

          <div className="flex flex-col items-center gap-10 w-full py-6">
            <div className="flex flex-col xl:flex-row items-center w-full gap-8">
              <div className="flex-shrink-0">
                <Image
                  alt="Imagem ilustrativa de equipe"
                  width={350}
                  height={250}
                  src="/assets/team-work.png"
                />
              </div>
              <div className="flex flex-col gap-4 text-center rounded-xl shadow-md p-4 sm:text-left">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Bem-vindo ao CoreTeam!
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl">
                  Gerencie sua equipe de desenvolvimento de forma eficiente e
                  organizada. Cadastre funcionários, atribua funções, monitore
                  salários e crie times de alta performance. Tudo em um só
                  lugar!
                </p>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row-reverse items-center w-full gap-8">
              <div className="flex-shrink-0">
                <Image
                  alt="Imagem ilustrativa de colaboração"
                  width={350}
                  height={250}
                  src="/assets/collaboration.png"
                />
              </div>
              <div className="flex flex-col gap-4 text-center rounded-xl shadow-md p-4 sm:text-left">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Por que usar o CoreTeam?
                </h3>
                <p className="text-gray-600 text-lg max-w-2xl">
                  Com o CoreTeam, você tem todas as ferramentas necessárias para
                  gerenciar sua equipe de forma eficaz. Desde o cadastro de
                  funcionários até a organização de times, tudo é feito de forma
                  simples e intuitiva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
