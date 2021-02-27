import React from "react";
import "./styles.scss";

const BodyModalTemplate = (props) => {
  const { form, onChangeForm } = props;
  const colors = ["#ff9c9c", "#daffd3", "#ffe8ad", "#c1bcff", "#c4c4c4"];

  function handleChangeColor(newValue) {
    onChangeForm({ target: { name: "color", value: newValue } });
  }

  return (
    <>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Digite o nome do template"
        value={form.name}
        onChange={onChangeForm}
      />
      <label htmlFor="description">Nome</label>
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
    </>
  );
};

export default BodyModalTemplate;
