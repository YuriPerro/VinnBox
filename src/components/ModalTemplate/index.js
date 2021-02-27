import React from "react";
import "./styles.scss";

import { BaseButton } from "../index";

const ModalTemplate = (props) => {
  const { visibility = false, setVisibility } = props;

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
              placeholder="Digite o nome do template"
            />
            <label htmlFor="description">Nome</label>
            <textarea
              id="description"
              rows="8"
              placeholder="Digite uma descrição pro template (opicional)"
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
