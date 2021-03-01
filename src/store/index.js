import React, { createContext, useState, useContext } from "react";

const StoreContext = createContext();

export default function StoreProvider({ children }) {
  const [recentTasks, setRecentTasks] = useState([]);
  const [templates, setTemplates] = useState([
    {
      name: "Dia a dia",
      description: "Tarefas do diárias",
      color: "#ff9c9c",
      tasks: [
        {
          name: "Fazer 1hr de exercícios",
          category: "A fazer",
        },
        {
          name: "Continuar o fluxo de trabalho",
          category: "Em andamento",
        },
        {
          name:
            "Ler artigos científicos sobre o tema, fazer resumos e entregar a diretoria para aprovação",
          category: "Concluído",
        },
      ],
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

  function addTask(templateIndex, newTask) {
    if (!templates[templateIndex]) return;

    setTemplates((prevState) => {
      const newState = [...prevState];
      newState[templateIndex].tasks.push(newTask);
      return newState;
    });
    setRecentTasks([...recentTasks, newTask]);
  }

  return (
    <StoreContext.Provider
      value={{
        templates,
        setTemplates,
        addTask,
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
