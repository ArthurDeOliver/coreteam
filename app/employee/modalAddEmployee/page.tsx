"use client";
import { IoCloseCircle } from "react-icons/io5";

//necessário possuir o state do setmodal para mudar seu estado para false
interface ModalComponenProps {
  setIsModalOpen: (value: boolean) => void;
}

export const ModalComponent = ({ setIsModalOpen }: ModalComponenProps) => {
  return (
    //fixed permite o componente ficar fixo a tela primeira div cria o fundo, segunda div a tela em si
    <div className="fixed inset-0 flex bg-black bg-opacity-50 items-center justify-center z-10">
      <div className="bg-bg-page-950 relative rounded-md shadow-lg p-4 flex flex-col gap-4 max-w-2xl max-h-[80vh] w-full  custom-scrollbar">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Título do Modal</h2>
          <button
            className="absolute -top-4 -right-4 bg-white rounded-full"
            onClick={() => setIsModalOpen(false)}
          >
            <IoCloseCircle
              className="fill-cancel-color-700 hover:fill-cancel-color-900 transition-all"
              size={35}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
