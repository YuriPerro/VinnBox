import React, { useState } from "react";
import { Search, SideBar } from "../../components";
import taskIcon from '../../assets/icons/taskIcon.svg';
import BodyModalTemplate from "./BodyModalTemplate";
import BaseModal from "../../components/BaseModal";

import "./styles.scss";

function Home() {

  const [templates, setTemplates] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    color: ""
  });

  function navigate(props) {
    if (props === "ADD_TEMPLATE") {
      setOpenModal(true);
    }
  }

  function closeModal() {
    setOpenModal(false)
  }

  function handleInputChange(event) {
    const { value, name } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="home-wrapper">
      <SideBar goToNavigate={(res) => navigate(res)} />
      <Search />

      <BaseModal visibility={openModal} setVisibility={() => closeModal()} >
        <BodyModalTemplate onChangeForm={(res) => handleInputChange(res)} form={form} />
      </BaseModal>

      <section>
        <div className="div-templates">
          <h2> Seus templates </h2>
          {Object.values(templates).length === 0 ?
            <p> Você ainda não possui templates.</p>
            :
            <div> {templates} </div>
          }
        </div>

        <div className="div-cards">
          <h2> Tarefas adicionados recentemente </h2>
        </div>
      </section>

      <img src={taskIcon} alt="taskicon" />
    </div>
  );
}

export default Home;
