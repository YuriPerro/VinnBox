import React, { useState } from "react";
import "./styles.scss";

import { useLocation } from "wouter";
import { useStore } from "../../store";
import { Search, SideBar, BaseModal } from "../../components";
import taskImg from "../../assets/images/task.png";
import ContentModalTemplate from "./ContentModalTemplate";
const emptyTemplateForm = {
  name: "",
  description: "",
  color: "#ff9c9c",
  tasks: [],
};

function Home() {
  const { templates, setTemplates, recentTasks } = useStore();
  const [, setLocation] = useLocation();
  const [templateForm, setTemplateForm] = useState(emptyTemplateForm);
  const [mdVisibility, setMdVisibility] = useState(false);

  function handleTemplateFormChange(event) {
    const { value, name } = event.target;
    setTemplateForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmitTemplateForm() {
    if (!templateForm.name || !templateForm.color) {
      alert("Campo nome é obrigatório!");
      return;
    }

    if (
      templates.find(
        (template) =>
          template.name.trim().toUpperCase() ===
          templateForm.name.trim().toUpperCase()
      )
    ) {
      alert("Campo nome deve ser único!");
      return;
    }

    setTemplates([...templates, templateForm]);
    setMdVisibility(false);
    setTemplateForm(emptyTemplateForm);
  }

  function redirectToTemplate(templateIndex) {
    setLocation(`/template/${templateIndex}`);
  }

  return (
    <div className="home-wrapper">
      <SideBar openModal={() => setMdVisibility(true)} />
      <Search />

      <BaseModal
        title={"Adicionar Template"}
        visibility={mdVisibility}
        setVisibility={setMdVisibility}
      >
        <ContentModalTemplate
          form={templateForm}
          onChangeForm={handleTemplateFormChange}
          onSubmitForm={handleSubmitTemplateForm}
        />
      </BaseModal>

      <section>
        <div className="div-templates-container">
          <h2> Seus templates </h2>
          <div className="div-templates">
            {templates.length === 0 ? (
              <p> Você ainda não possui templates.</p>
            ) : (
              <ul className="list-templates">
                {templates.map((template, index) => (
                  <div
                    key={template.name + index}
                    onClick={() => redirectToTemplate(index)}
                    className="card-template"
                  >
                    <span
                      className="name"
                      style={{ background: template.color }}
                    >
                      {template.name}
                    </span>
                    <p className="description">
                      {template.description
                        ? template.description
                        : "Sem descrição..."}
                    </p>
                  </div>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="recent-tasks-container">
          <h2> Tarefas adicionados recentemente </h2>
          <ul className="list-templates">
            {recentTasks.map((task, index) => (
              <div
                key={task.name + index}
                className="card-template"
                style={{ cursor: "default" }}
              >
                <span className="name" style={{ background: "#fff" }}>
                  {task.category} - {task.templateName}
                </span>
                <p className="description">• {task.name}</p>
              </div>
            ))}
          </ul>
        </div>
      </section>

      <img src={taskImg} alt="task" />
    </div>
  );
}

export default Home;
