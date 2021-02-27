import React, { useState } from "react";
import "./styles.scss";

import { BaseModal, SideBar } from "../../components";
import BodyModalTemplate from "./BodyModalTemplate";

function Home() {
  const [mdVisibility, setMdVisibility] = useState(false);
  const [templateForm, setTemplateForm] = useState({
    name: "",
    description: "",
    color: "#ff9c9c",
  });

  function handleTemplateFormChange(event) {
    const { value, name } = event.target;
    setTemplateForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="home-wrapper">
      <SideBar openModal={() => setMdVisibility(true)} />

      <div className="content">
        <h2>Home</h2>
        <BaseModal visibility={mdVisibility} setVisibility={setMdVisibility}>
          <BodyModalTemplate
            form={templateForm}
            onChangeForm={handleTemplateFormChange}
          />
        </BaseModal>

        <br />
        {templateForm.name}
        <br />
        {templateForm.description}
        <br />
        {templateForm.color}
        <br />
      </div>
    </div>
  );
}

export default Home;
