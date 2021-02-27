import React from "react";
import "./styles.scss";

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

<<<<<<< HEAD
          <main>{children}</main>

          <footer>
            <BaseButton onClick={() => setVisibility()}>
              Criar template
            </BaseButton>
          </footer>
=======
          {children}
>>>>>>> 3c4a967efb761b3c974a8c967b5d6c7cb96298c2
        </div>
      </div>
    )
  );
};

export default BaseModal;
