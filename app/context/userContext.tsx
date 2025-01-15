import React, { createContext, useState, ReactNode, useContext } from "react";

//criação do tipo do contexto
type UserType = "adm" | "func" | null;

//criando a interface do contexto com os métodos setUser e userType
interface UserContextType {
  userType?: UserType;
  setUser: (user: UserType) => void;
}

//criando o contexto
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

//tipagem do provider
type UserProviderProps = {
  children: ReactNode;
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
};

//criando o provider
export const UserProvider = ({ children }: UserProviderProps) => {
  const [userType, setUserType] = useState<UserType>(null);

  return (
    <UserContext.Provider value={{ userType, setUser: setUserType }}>
      {children}
    </UserContext.Provider>
  );
};
