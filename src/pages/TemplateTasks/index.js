import React, { useEffect, useState } from "react";
import "./styles.scss";

import { useRoute } from "wouter";
import ContentModalTask from "./ContentModalTask";
import dividerCard from "../../assets/images/card-divider-vertical.png";
import { Search, SideBar, BaseModal } from "../../components";
const emptyTemplateForm = { name: "", category: "A fazer" };

const TemplateTasks = () => {
  const [, params] = useRoute("/template/:template");
  const [template, setTemplate] = useState(null);
  const [tasks, setTasks] = useState([]);
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

    setTasks([...tasks, taskForm]);
    setMdVisibility(false);
    setTaskForm(emptyTemplateForm);
  }

  useEffect(() => {
    setTemplate(JSON.parse(decodeURIComponent(params.template)));
  }, [params.template]);

  return (
    template && (
      <div className="template-tasks-wrapper">
        <SideBar />
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
        {/* btn de teste do modal */}
        <button onClick={() => setMdVisibility(true)}>modal add tarefa</button>
      </div>
    )
  );
};

export default TemplateTasks;
