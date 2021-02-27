import React from "react";
import "./styles.scss";

import { BaseButton } from "../index";

const ModalTemplate = (props) => {
  const { visibility = false, form, onChangeForm, setVisibility } = props;

  return (
    visibility && (
      <div className="modal-overlay" onClick={() => setVisibility(false)}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <header>
            <h2>Adicionar Template</h2>

            <button className="btn-close" onClick={() => setVisibility(false)}>
              &#x2715;
            </button>
          </header>

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
              <div className="color red"></div>
              <div className="color green"></div>
              <div className="color yellow"></div>
              <div className="color purple"></div>
              <div className="color gray"></div>
            </div>
          </main>

          <footer>
            <BaseButton onClick={() => setVisibility(false)}>
              Criar template
            </BaseButton>
          </footer>
        </div>
      </div>
    )
  );
};

export default ModalTemplate;

/*
### exemplo de utilização ###
  const [modalVisibility, setModalVisibility] = useState(false);
  const [formModal, setFormModal] = useState({
    name: "",
    description: "",
  });

  function handleFormModalChange(event) {
    const { value, name } = event.target;
    setFormModal((prev) => ({ ...prev, [name]: value }));
  }

 ### no html ###
  <ModalTemplate
    visibility={modalVisibility}
    setVisibility={setModalVisibility}
    form={formModal}
    onChangeForm={handleFormModalChange}
  />
  <button onClick={() => setModalVisibility(true)}>open modal</button>
*/
