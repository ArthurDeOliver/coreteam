"use client";
import { ButtonDefault } from "@/app/components/button/buttonDefault/page";
import { ModalComponent } from "@/app/components/modal/page";
import { useState } from "react";

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  //{isModalOpen && <ModalComponent setIsModalOpen={setIsModalOpen} />} executa o modal caso o estado for true
  return (
    <>
      <div className="w-40">
        <ButtonDefault text="Abrir modal" onClick={openModal} enabled={true} />
      </div>
      {isModalOpen && <ModalComponent setIsModalOpen={setIsModalOpen} />}
    </>
  );
};
