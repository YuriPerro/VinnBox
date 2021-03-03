import React, { createContext, useState, useContext } from "react";

const StoreContext = createContext();

export default function StoreProvider({ children }) {
  const [recentTasks, setRecentTasks] = useState([
    {
      name: "1hr de exercícios",
      category: "A fazer",
      templateName: "Dia a dia",
    },
  ]);
  const [templates, setTemplates] = useState([
    {
      name: "Dia a dia",
      description: "Tarefas do diárias",
      color: "#ff9c9c",
      tasks: [
        {
          name: "1hr de exercícios",
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
    setRecentTasks([
      ...recentTasks,
      { ...newTask, templateName: templates[templateIndex].name },
    ]);
  }

  function updateTask(templateIndex, taskToUpdate, newTask) {
    if (!templates[templateIndex] && taskToUpdate) return;

    setTemplates((prevState) => {
      const taskIndex = prevState[templateIndex].tasks.findIndex(
        (task) => task.name === taskToUpdate.name
      );
      const newState = [...prevState];
      newState[templateIndex].tasks.splice(taskIndex, 1);
      newState[templateIndex].tasks.push({ ...newTask });
      return newState;
    });
  }

  function deleteTask(templateIndex, taskToDelete) {
    if (!templates[templateIndex]) return;

    setTemplates((prevState) => {
      const tasksFiltered = prevState[templateIndex].tasks.filter(
        (task) => task.name !== taskToDelete.name
      );
      const newState = [...prevState];
      newState[templateIndex].tasks = [...tasksFiltered];
      return newState;
    });
    setRecentTasks((prevState) => {
      return prevState.filter((task) => task.name !== taskToDelete.name);
    });
  }

  return (
    <StoreContext.Provider
      value={{
        templates,
        setTemplates,
        addTask,
        updateTask,
        deleteTask,
        recentTasks,
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
