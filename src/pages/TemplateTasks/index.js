import React, { useEffect, useState } from "react";
import "./styles.scss";

import { useRoute } from "wouter";
import { useStore } from "../../store";
import ContentModalTask from "./ContentModalTask";
import dividerCard from "../../assets/images/card-divider-vertical.png";
import { Search, SideBar, BaseModal } from "../../components";
const emptyTemplateForm = { name: "", category: "A fazer" };

const TemplateTasks = () => {
  const { templates } = useStore();
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

    //add task no template
    setMdVisibility(false);
    setTaskForm(emptyTemplateForm);
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
        <h1>Revisão</h1>
        name: {template.name} <br />
        description: {template.description} <br />
        color: {template.color} <br />
        <div>
          <div id="wrapper">
            <div id="left"> A fazer </div>
            <div id="center">Em andamento</div>
            <div id="right">Concluído</div>
            <div id="left">
              {" "}
              <img
                className="img-divider"
                src={dividerCard}
                alt="divider"
              />{" "}
            </div>
            <div id="center">
              <img className="img-divider" src={dividerCard} alt="divider" />
            </div>
            <div id="right">
              <img className="img-divider" src={dividerCard} alt="divider" />
            </div>
          </div>
        </div>
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
