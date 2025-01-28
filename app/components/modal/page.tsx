"use client";

//necessário possuir o state do setmodal para mudar seu estado para false
interface ModalComponenProps {
  setIsModalOpen: (value: boolean) => void;
}

export const ModalComponent = ({ setIsModalOpen }: ModalComponenProps) => {
  return (
    //fixed permite o componente ficar fixo a tela primeira div cria o fundo, segunda div a tela em si
    <div className="fixed inset-0 flex bg-black bg-opacity-50 items-center justify-center z-10">
      <div className="bg-white rounded-md shadow-lg p-4 flex flex-col gap-4 max-w-2xl max-h-[80vh] w-full overflow-y-auto custom-scrollbar">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-black">Título do Modal</h2>
          <button onClick={() => setIsModalOpen(false)}>fechar</button>
        </div>
      </div>
    </div>
  );
};
