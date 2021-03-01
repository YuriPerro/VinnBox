import React from "react";
import "./styles.scss";

import { BaseButton } from "../../../components";

const ContentModalTemplate = (props) => {
  const { form, onChangeForm, onSubmitForm } = props;
  const colors = ["#ff9c9c", "#daffd3", "#ffe8ad", "#c1bcff", "#c4c4c4"];

  function handleChangeColor(newValue) {
    onChangeForm({ target: { name: "color", value: newValue } });
  }

  return (
    <>
      <main>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite o nome do template"
          value={form.name}
          onChange={onChangeForm}
        />
        <label htmlFor="description">Descrição</label>
        <textarea
          id="description"
          name="description"
          rows="8"
          placeholder="Digite uma descrição pro template (opicional)"
          value={form.description}
          onChange={onChangeForm}
        />

        <label>Cor</label>
        <div className="custom-color-picker">
          {colors.map((color) => (
            <div
              key={color}
              className={`color ${color === form.color ? "selected" : ""}`}
              style={{ backgroundColor: color }}
              onClick={() => handleChangeColor(color)}
            />
          ))}
        </div>
      </main>

      <footer>
        <BaseButton onClick={onSubmitForm}>Criar template</BaseButton>
      </footer>
    </>
  );
};

export default ContentModalTemplate;
