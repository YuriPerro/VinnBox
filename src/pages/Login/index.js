import React from "react";
import "./styles.scss";

import { Link } from "wouter";
import asideImgCard from "../../assets/images/card-bg.png";
import dividerCard from "../../assets/images/card-divider.png";
import footerImgLogin from "../../assets/images/login-footer-img.png";

const Login = () => {
  return (
    <div className="login-wrapper">
      <h1 className="title">VinnBox</h1>

      <div className="card">
        <h2 className="title">Faça login</h2>

        <div className="body">
          <form className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="text" id="email" placeholder="Digite seu e-mail" />

            <label htmlFor="pass">Senha</label>
            <input type="password" id="pass" placeholder="Digite sua senha" />

            <Link href="/login" className="forgot-pass-link">
              Esqueceu a senha ?
            </Link>
            <button type="button">Entrar</button>
          </form>

          <img className="img-divider" src={dividerCard} alt="divider" />

          <span className="bottom-text">
            Não possui uma conta?&nbsp;
            <Link href="/login" className="sign-up-link">
              Crie aqui.
            </Link>
          </span>
        </div>

        <img className="aside-img right" src={asideImgCard} alt="" />
        <img className="aside-img left" src={asideImgCard} alt="" />
      </div>

      <img className="footer-img" src={footerImgLogin} alt="" />
    </div>
  );
};

export default Login;
