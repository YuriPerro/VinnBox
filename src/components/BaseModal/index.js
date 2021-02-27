import React from "react";
import "./styles.scss";

import { BaseButton } from "../index";

const BaseModal = (props) => {
  const { visibility = false, setVisibility, children } = props;

  return (
    visibility && (
      <div className="modal-overlay" onClick={() => setVisibility()}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <header>
            <h2>Adicionar Template</h2>

            <button className="btn-close" onClick={() => setVisibility()}>
              &#x2715;
            </button>
          </header>

          <main>{children}</main>

          <footer>
            <BaseButton onClick={() => setVisibility()}>
              Criar template
            </BaseButton>
          </footer>
        </div>
      </div>
    )
  );
};

export default BaseModal;
