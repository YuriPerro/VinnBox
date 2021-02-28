import React, { useEffect, useState } from "react";
import "./styles.scss";

import { useRoute } from "wouter";
import { BaseModal } from "../../components";
import ContentModalTask from "./ContentModalTask";
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
        <h1>{template.name}</h1>
        {template.description && <p>Descrição: {template.description}</p>}

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
        <div>
          <div id="wrapper">
            <div id="left">Left side div </div>
            <div id="center">Right side div</div>
            <div id="right">Right side div</div>
          </div>
        </div>
      </div>
    )
  );
};

export default TemplateTasks;
