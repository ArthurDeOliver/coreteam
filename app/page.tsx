"use client";
import { ButtonAdd } from "./components/button/buttonAdd/page";
import { InputComponent } from "./components/input/page";
import { LogoPage } from "./components/logo/page";

export default function Home() {
  return (
    <div className="w-full h-dvh bg-bg-page-950">
      <LogoPage />
      <div className="w-40">
        <ButtonAdd text="Adicionar" />
      </div>
      <div>
        <InputComponent
          enabled={true}
          label="Nome"
          placeholder="digite o nome da equipe"
          type="text"
        />
      </div>
    </div>
  );
}
