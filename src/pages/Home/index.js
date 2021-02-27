import React, { useState } from "react";
import "./styles.scss";

import { Search, SideBar, BaseModal } from "../../components";
import taskIcon from "../../assets/icons/taskIcon.svg";
import ContentModalTemplate from "./ContentModalTemplate";
const emptyTemplateForm = { name: "", description: "", color: "#ff9c9c" };

function Home() {
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

  return (
    <div className="home-wrapper">
      <SideBar openModal={() => setMdVisibility(true)} />
      <Search />

      <BaseModal visibility={mdVisibility} setVisibility={setMdVisibility}>
        <ContentModalTemplate
          form={templateForm}
          onChangeForm={handleTemplateFormChange}
          onSubmitForm={handleSubmitTemplateForm}
        />
      </BaseModal>

      <section>
        <div className="div-templates">
          <h2> Seus templates </h2>
          {templates.length === 0 ? (
            <p> Você ainda não possui templates.</p>
          ) : (
            templates.map((template) => (
              <p key={template.name}>Template: {template.name}</p>
            ))
          )}
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
