import React, { useEffect, useState } from "react";
import "./styles.scss";

import { useRoute, useLocation } from "wouter";
import { useStore } from "../../store";
import ContentModalTask from "./ContentModalTask";
import { Search, SideBar, BaseModal } from "../../components";
const emptyTemplateForm = { name: "", category: "A fazer" };

const TemplateTasks = () => {
  const {
    templates,
    setTemplates,
    addTask,
    deleteTask,
    updateTask,
  } = useStore();
  const [, params] = useRoute("/template/:index");

  const [, setLocation] = useLocation();
  const [template, setTemplate] = useState(null);
  const [formType, setFormType] = useState("create");
  const [taskForm, setTaskForm] = useState(emptyTemplateForm);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [mdVisibility, setMdVisibility] = useState(false);

  const [deleteModalVisibility, setDeleteVisibility] = useState(false);

  function handleTemplateFormChange(event) {
    const { value, name } = event.target;
    setTaskForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmitTemplateForm() {
    if (!taskForm.name || !taskForm.category) {
      alert("Campo nome é obrigatório!");
      return;
    }

    if (formType === "create") {
      if (
        template.tasks.find(
          (task) =>
            task.name.trim().toUpperCase() ===
            taskForm.name.trim().toUpperCase()
        )
      ) {
        alert("Campo nome deve ser único!");
        return;
      }
      taskForm.index = template.tasks.length;
      addTask(params.index, taskForm);
      setTaskForm(emptyTemplateForm);
    } else {
      updateTask(params.index, taskToUpdate, taskForm);
    }
    setMdVisibility(false);
  }

  function openModalCreateTask() {
    setFormType("create");
    setTaskForm(emptyTemplateForm);
    setMdVisibility(true);
  }

  function openModalEditTask(task) {
    setFormType("edit");
    setTaskToUpdate({ ...task });
    setTaskForm({ ...task });
    setMdVisibility(true);
  }

  function deleteTemplate() {
    setLocation("/home");
    setTemplates((prevState) => {
      return prevState.filter(
        (templatePrev) => templatePrev.name !== template.name
      );
    });
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
        <SideBar openModal={openModalCreateTask} />
        <Search />

        <section className="template-info">
          <h1>
            {template.name}{" "}
            <div className="btn-group">
              <button>...</button>
              <button onClick={() => setDeleteVisibility(true)}>&#x2715;</button>
            </div>
          </h1>
          <p>Descrição: {template.description}</p>
        </section>

        <section className="task-titles"></section>

        <section className="kanban-wrapper">
          <div className="column to-do">
            <span className="title">A fazer</span>

            <ul className="list-tasks">
              {template.tasks
                .filter((task) => task.category === "A fazer")
                .map((task, i) => (
                  <li key={i + task.name + task.category} className="item">
                    <div className="btn-group">
                      <button onClick={() => openModalEditTask(task)}>
                        ...
                      </button>
                      <button onClick={() => deleteTask(params.index, task)}>
                        &#x2715;
                      </button>
                    </div>
                    • {task.name}
                  </li>
                ))}
            </ul>
          </div>
          <div className="column doing">
            <ul className="list-tasks">
              <span className="title">Em andamento</span>

              {template.tasks
                .filter((task) => task.category === "Em andamento")
                .map((task, i) => (
                  <li key={i + task.name + task.category} className="item">
                    <div className="btn-group">
                      <button onClick={() => openModalEditTask(task)}>
                        ...
                      </button>
                      <button onClick={() => deleteTask(params.index, task)}>
                        &#x2715;
                      </button>
                    </div>
                    • {task.name}
                  </li>
                ))}
            </ul>
          </div>
          <div className="column completed">
            <span className="title">Concluído</span>
            <ul className="list-tasks">
              {template.tasks
                .filter((task) => task.category === "Concluído")
                .map((task, i) => (
                  <li key={i + task.name + task.category} className="item">
                    <div className="btn-group">
                      <button onClick={() => openModalEditTask(task)}>
                        ...
                      </button>
                      <button onClick={() => deleteTask(params.index, task)}>
                        &#x2715;
                      </button>
                    </div>
                    • {task.name}
                  </li>
                ))}
            </ul>
          </div>
        </section>

        <BaseModal
          title={"Excluir"}
          visibility={deleteModalVisibility}
          setVisibility={setDeleteVisibility}
        >
          <form>
            <body>
              <p className="title-modal-delete">
                Tem certeza que deseja excluir o template {template.name}?
              </p>
              <br/>
              <p className="body-modal-delete">
                • Você possui {template.tasks.length == 1 ? template.tasks.length + ' card adicionado' : template.tasks.length + ' cards adicionados'} a esse template.
              </p>
            </body>
            <footer>
              <button className="btn-left" onClick={() => setDeleteVisibility(false)}>
                Voltar
              </button>
              <button className="btn-right" onClick={() => deleteTemplate()}>
                Confirmar
              </button>
            </footer>
          </form>
        </BaseModal>

        <BaseModal
          title={formType === "create" ? "Adicionar Tarefa" : "Editar Tarefa"}
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
