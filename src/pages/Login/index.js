import React, { useState } from "react";
import "./styles.scss";

import { Link, useLocation } from "wouter";
import { BaseButton } from "../../components";
import dividerCard from "../../assets/images/card-divider.png";
import footerImgLogin from "../../assets/images/login-footer-img.png";
import VinnBoxLogo from "../../assets/images/VINNBOX.png";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [, setLocation] = useLocation();

  function handleInputChange(event) {
    const { value, name } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function submitForm(event) {
    event.preventDefault();
    console.log(form);
    setLocation("/home");
  }

  return (
    <div className="login-wrapper">
      <img
        src={VinnBoxLogo}
        width={90}
        height={60}
        style={{ alignSelf: "center" }}
        alt="logo"
      />

      <div className="card">
        <h2 className="title">Faça login</h2>

        <div className="body">
          <form onSubmit={submitForm} className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={form.email}
              onChange={handleInputChange}
            />

            <label htmlFor="pass">Senha</label>
            <input
              type="password"
              name="password"
              id="pass"
              placeholder="Digite sua senha"
              value={form.password}
              onChange={handleInputChange}
            />

            <Link href="/login" className="forgot-pass-link">
              Esqueceu a senha ?
            </Link>
            <BaseButton type={"submit"}>Entrar</BaseButton>
          </form>

          <img className="img-divider" src={dividerCard} alt="divider" />

          <span className="bottom-text">
            Não possui uma conta?&nbsp;
            <Link href="/register" className="sign-up-link">
              Crie aqui.
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

export default Login;
