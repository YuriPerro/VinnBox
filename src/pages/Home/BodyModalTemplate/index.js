import React from "react";

const BodyModalTemplate = (props) => {
  const { form, onChangeForm } = props;

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
        <div
          className="color red"
          onClick={() => handleChangeColor("#ff9c9c")}
        ></div>
        <div
          className="color green"
          onClick={() => handleChangeColor("#daffd3")}
        ></div>
        <div
          className="color yellow"
          onClick={() => handleChangeColor("#ffe8ad")}
        ></div>
        <div
          className="color purple"
          onClick={() => handleChangeColor("#c1bcff")}
        ></div>
        <div
          className="color gray"
          onClick={() => handleChangeColor("#c4c4c4")}
        ></div>
      </div>
    </>
  );
};

export default BodyModalTemplate;
