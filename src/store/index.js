import React, { createContext, useState, useContext } from "react";

const StoreContext = createContext();

export default function StoreProvider({ children }) {
  const [templates, setTemplates] = useState([
    {
      name: "Dia a dia",
      description: "Tarefas do diárias",
      color: "#ff9c9c",
      tasks: [],
    },
    {
      name: "Faculdade",
      description: "Matérias da faculdade a serem estudadas",
      color: "#c1bcff",
      tasks: [],
    },
    {
      name: "Curso de CSS",
      description: "Tarefas do cursos da Udemy",
      color: "#c4c4c4",
      tasks: [],
    },
  ]);

  return (
    <StoreContext.Provider
      value={{
        templates,
        setTemplates,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  return { ...context };
}
