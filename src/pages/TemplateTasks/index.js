import React, { useEffect, useState } from "react";
import "./styles.scss";

import { useRoute } from "wouter";
import { useStore } from "../../store";
import ContentModalTask from "./ContentModalTask";
import { Search, SideBar, BaseModal } from "../../components";
const emptyTemplateForm = { name: "", category: "A fazer" };

const TemplateTasks = () => {
  const { templates, addTask } = useStore();
  const [, params] = useRoute("/template/:index");
  const [template, setTemplate] = useState(null);
  const [taskForm, setTaskForm] = useState(emptyTemplateForm);
  const [mdVisibility, setMdVisibility] = useState(false);

  function handleTemplateFormChange(event) {
    const { value, name } = event.target;
    setTaskForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmitTemplateForm() {
    if (!taskForm.name || !taskForm.category) {
      alert("Campo nome é obrigatório!");
      return;
    }

    addTask(params.index, taskForm);
    setMdVisibility(false);
    setTaskForm(emptyTemplateForm);
    console.log(templates);
  }

  useEffect(() => {
    if (params && templates[params.index]) {
      setTemplate({ ...templates[parseInt(params.index)] });
    }
    // eslint-disable-next-line
  }, [templates]);

  return (
    template && (
      <div className="template-tasks-wrapper">
        <SideBar openModal={() => setMdVisibility(true)} />
        <Search />

        <section className="template-info">
          <h1>{template.name}</h1>
          <p>Descrição: {template.description}</p>
        </section>

        <section className="task-titles">
          <span>A fazer</span>
          <span>Em andamento</span>
          <span>Concluído</span>
        </section>

        <section className="kanban-wrapper">
          <div className="column to-do">
            <ul className="list-tasks">
              {template.tasks
                .filter((task) => task.category === "A fazer")
                .map((task, i) => (
                  <li key={i + task.name + task.category} className="item">
                    {task.name}
                  </li>
                ))}
            </ul>
          </div>
          <div className="column doing">
            <ul className="list-tasks">
              {template.tasks
                .filter((task) => task.category === "Em andamento")
                .map((task, i) => (
                  <li key={i + task.name + task.category} className="item">
                    {task.name}
                  </li>
                ))}
            </ul>
          </div>
          <div className="column completed">
            <ul className="list-tasks">
              {template.tasks
                .filter((task) => task.category === "Concluído")
                .map((task, i) => (
                  <li key={i + task.name + task.category} className="item">
                    {task.name}
                  </li>
                ))}
            </ul>
          </div>
        </section>

        <BaseModal
          title={"Adicionar Tarefa"}
          visibility={mdVisibility}
          setVisibility={setMdVisibility}
        >
          <ContentModalTask
            form={taskForm}
            onChangeForm={handleTemplateFormChange}
            onSubmitForm={handleSubmitTemplateForm}
          />
        </BaseModal>
      </div>
    )
  );
};

export default TemplateTasks;
