import React, { useEffect, useState } from "react";
import { useRoute } from "wouter";

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
      </div>
    )
  );
};

export default TemplateTasks;
