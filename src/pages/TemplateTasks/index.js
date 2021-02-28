import React, { useEffect, useState } from "react";
import { useRoute } from "wouter";
import "./styles.scss";
import dividerCard from "../../assets/images/card-divider-vertical.png";
import { Search, SideBar, BaseModal } from "../../components";

const TemplateTasks = () => {
  const [, params] = useRoute("/template/:template");
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    setTemplate(JSON.parse(decodeURIComponent(params.template)));
  }, []);

  return (
    
    template && (
      <div>
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
          <div id="left"> <img className="img-divider" src={dividerCard} alt="divider" /> </div>
          <div id="center"><img className="img-divider" src={dividerCard} alt="divider" /></div>
          <div id="right"><img className="img-divider" src={dividerCard} alt="divider" /></div>
        </div>
          
        </div>
      </div>

      
    )
  );
};

export default TemplateTasks;
