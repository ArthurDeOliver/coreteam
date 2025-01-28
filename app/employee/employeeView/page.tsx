export const EmployeeView = () => {
  return (
    <div>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full">
          {/* Cabeçalho */}
          <thead className="bg-primary-color-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Cpf</th>
              <th className="py-3 px-6 text-left">Nome</th>
              <th className="py-3 px-6 text-left">Função</th>
              <th className="py-3 px-6 text-left">Salário</th>
            </tr>
          </thead>

          {/* Corpo */}
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};
