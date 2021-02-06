import React, { useState } from "react";
import "./styles.scss";

import { Link } from "wouter";
import { BaseButton } from "../../components";
import asideImgCard from "../../assets/images/card-bg.png";
import dividerCard from "../../assets/images/card-divider.png";
import footerImgLogin from "../../assets/images/login-footer-img.png";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    const { value, name } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function submitForm(event) {
    event.preventDefault();
    console.log(form);
  }

  return (
    <div className="login-wrapper">
      <h1 className="title">VinnBox</h1>

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

        <img className="aside-img right" src={asideImgCard} alt="" />
        <img className="aside-img left" src={asideImgCard} alt="" />
      </div>

      <img className="footer-img" src={footerImgLogin} alt="" />
    </div>
  );
};

export default Login;
