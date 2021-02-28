import React, { useState } from "react";
import "./styles.scss";

import { useLocation } from "wouter";
import { Search, SideBar, BaseModal } from "../../components";
import taskIcon from "../../assets/icons/taskIcon.svg";
import ContentModalTemplate from "./ContentModalTemplate";
const emptyTemplateForm = { name: "", description: "", color: "#ff9c9c" };

function Home() {
  const [, setLocation] = useLocation();
  const [templates, setTemplates] = useState([]);
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

    setTemplates([...templates, templateForm]);
    setMdVisibility(false);
    setTemplateForm(emptyTemplateForm);
  }

  function redirectToTemplate(template) {
    setLocation(`/template/${encodeURIComponent(JSON.stringify(template))}`);
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
                templates.map((template, i) => (
                  <div
                    key={template.name + i}
                    className="card-template"
                    style={{ background: template.color }}
                    onClick={() => redirectToTemplate(template)}
                  >
                    <p className="card-name">{template.name} </p>
                    <p className="card-description">{template.description}</p>
                    <br />
                  </div>
                ))
              )}
          </div>
        </div>

        <div className="div-cards">
          <h2> Tarefas adicionados recentemente </h2>
        </div>
      </section>

      <img src={taskIcon} alt="task icon" />
    </div>
  );
}

export default Home;
