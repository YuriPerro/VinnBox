import React, { useEffect, useState } from "react";
import { useRoute } from "wouter";
import "./styles.scss";
import dividerCard from "../../assets/images/card-divider-vertical.png";

const TemplateTasks = () => {
  const [, params] = useRoute("/template/:template");
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    setTemplate(JSON.parse(decodeURIComponent(params.template)));
  }, []);

  return (
    template && (
      <div>
        <h1>Template Tasks</h1>
        name: {template.name} <br />
        description: {template.description} <br />
        color: {template.color} <br />
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
