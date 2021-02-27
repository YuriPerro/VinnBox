import React, { useState } from "react";
import "./styles.scss";

import { Link } from "wouter";
import { BaseButton } from "../../components";
import dividerCard from "../../assets/images/card-divider.png";
import footerImgLogin from "../../assets/images/login-footer-img.png";

const Cadastro = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
    confimation: "",
  });


  function submitForm(event) {
    event.preventDefault();
    console.log(form);
  }

  return (
    <div className="register-wrapper">
      <h1 className="title">VinnBox</h1>

      <div className="card">
        <h2 className="title">Cadastre-se</h2>
        <div className="body">
          <form onSubmit={submitForm} className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
            />

            <label htmlFor="pass">Senha</label>
            <input
              type="password"
              name="password"
              id="pass"
              placeholder="Digite sua senha"
            />

            <label htmlFor="conf">Confirme sua Senha</label>
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

            <BaseButton type={"submit"}>Cadastrar</BaseButton>
          </form>
          <img className="img-divider" src={dividerCard} alt="divider" />
          <span className="bottom-text">
            Já possui uma conta?&nbsp;
            <Link href="/login" className="sign-up-link">
              Entre aqui.
            </Link>
          </span>
        </div>
        <div draggable="false" className="aside-bg-img right" />
        <div draggable="false" className="aside-bg-img left" />
      </div>

      <img
        draggable="false"
        className="footer-img"
        src={footerImgLogin}
        alt="background draw"
      />
      
    </div>
  );
};

export default Cadastro;
