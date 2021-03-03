import React from "react";
import "./styles.scss";

import { useLocation } from "wouter";

import { BaseButton } from "../../components";
import footerImgLogin from "../../assets/images/login-footer-img.png";

function Profile() {
  const [, setLocation] = useLocation();
  function submitForm(event) {
    event.preventDefault();
    console.log("OK");
    setLocation("/home");
  }

  return (
    <div className="profile">
      <img
        draggable="false"
        className="footer-img"
        src={footerImgLogin}
        alt="background draw"
      />

      <h7>Usuário desde: 2020</h7>

      <div className="card">
        <div className="body">
          <form onSubmit={submitForm} className="form-group">
            <label htmlFor="email">Nome</label>
            <input type="text" name="nome" id="nome" placeholder="" />
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" id="email" placeholder="" />

            <label htmlFor="pass">Login</label>
            <input type="text" name="email" id="email" placeholder="" />

            <label htmlFor="pass">Senha</label>
            <input type="password" name="password" id="pass" placeholder="" />

            <label htmlFor="conf">Nova Senha</label>
            <input
              type="confirmation"
              name="confirmation"
              id="conf"
              placeholder=""
            />

            <BaseButton type={"submit"}>Salvar Alterações</BaseButton>
          </form>
        </div>
        <div draggable="false" className="aside-bg-img right" />
        <div draggable="false" className="aside-bg-img left" />
      </div>
    </div>
  );
}

export default Profile;
