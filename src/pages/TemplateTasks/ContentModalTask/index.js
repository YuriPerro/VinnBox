import React from "react";
import "./styles.scss";

import { BaseButton } from "../../../components";
const categories = [
  { name: "A fazer", color: "#FFD3D3" },
  { name: "Em andamento", color: "#C8E4FF" },
  { name: "Concluído", color: "#DAFFD3" },
];

const ContentModalTemplate = (props) => {
  const { form, onChangeForm, onSubmitForm } = props;

  function handleChangeCategory(newValue) {
    onChangeForm({ target: { name: "category", value: newValue } });
  }

  return (
    <>
      <main className="body-modal-task">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite o nome da tarefa"
          value={form.name}
          onChange={onChangeForm}
        />

        <label>Selecione a categoria</label>
        <ul className="category-picker">
          {categories.map((category) => (
            <li
              key={category.color}
              className={`category ${
                category.name === form.category ? "selected" : ""
              }`}
              onClick={() => handleChangeCategory(category.name)}
            >
              <div
                className="circle"
                style={{ backgroundColor: category.color }}
              />
              <span>{category.name}</span>
            </li>
          ))}
        </ul>
      </main>

      <footer>
        <BaseButton onClick={onSubmitForm}>Criar template</BaseButton>
      </footer>
    </>
  );
};

export default ContentModalTemplate;
