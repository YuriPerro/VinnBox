import React from "react";
import "./styles.scss";

import SideBar from '../../components/SideBar/index';

function Profile() {
  return (
    <div className="profile">
      <h5> Jaqueline
      </h5>

      <SideBar/>

      <div className="card">
        <div className="body">
          <form onSubmit={submitForm} className="form-group">
            <label htmlFor="email">Nome</label>
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder=""
            />
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder=""
            />

            <label htmlFor="pass">Login</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder=""
            />

            <label htmlFor="pass">Senha</label>
            <input
              type="password"
              name="password"
              id="pass"
              placeholder=""
            />

            <label htmlFor="conf">Nova Senha</label>
            <input
              type="confirmation"
              name="confirmation"
              id="conf"
              placeholder="Digite sua senha"
            />

            <span className="bottom-text">
              Ao se cadastrar, você confirma que leu e aceitou nossos&nbsp;
              Termos de Serviço e Política de Privacidade.
            </span>

            <BaseButton type={"submit"}>Salvar Alterações</BaseButton>
          </form>

        </div>
        <div draggable="false" className="aside-bg-img right" />
        <div draggable="false" className="aside-bg-img left" />
      </div>


    </div>
  )
}

export default Profile;
