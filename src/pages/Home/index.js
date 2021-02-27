import React, { useState } from "react";
import { Search, SideBar } from "../../components";
import taskIcon from '../../assets/icons/taskIcon.svg';

import "./styles.scss";

function Home() {

  const [templates, setTemplates] = useState({})

  return (
    <div className="home-wrapper">
      <SideBar />
      <Search />

      <section>
        <div className="div-templates">
          <h2> Seus templates </h2>
          {Object.values(templates).length == 0 ?
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
  )
}

export default Home;
