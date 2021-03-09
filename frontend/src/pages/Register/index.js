import React, { useState } from "react";
import "./styles.scss";

import { Link, useLocation } from "wouter";
import { BaseButton } from "../../components";
import dividerCard from "../../assets/images/card-divider.png";
import footerImgLogin from "../../assets/images/login-footer-img.png";
import VinnBoxLogo from "../../assets/images/VINNBOX.png";

import Cookies from 'js-cookie';

const Cadastro = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    password: "",
    confimation: "",
  });
  const [, setLocation] = useLocation();

  async function submitForm(event) {
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("pass").value;
    var conf = document.getElementById("conf").value;

    if (String(nome).length <= 2)
      alert("Nome curto demais!");
    else {
      var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      if (!reg.test(email))
        alert("Email inválido!")
      else {
        var regSenha = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;
        if (!regSenha.test(senha))
          alert("Senha fraca. Tente adicionar pelo menos 4 caracteres, 1 letra e 1 número!")
        else {
          if (senha !== conf) {
            alert("As senhas devem ser iguais!");
          }
          else {
            let formData = {
              nome: nome,
              email: email,
              senha: senha
            }

            if (Cookies.get('users')) {
              if (await usersExists(email)) {
                alert("Já existe um usuário cadastrado com esse email!")
              }
              else {
                let usersData = Cookies.getJSON('users');
                usersData.push(formData);
                Cookies.set("users", JSON.stringify(usersData));
                setLocation("/home");
              }
            }
            else {
              let arrayData = [];
              arrayData.push(formData);
              Cookies.set("users", JSON.stringify(arrayData));
              setLocation("/home");
            }
          }
        }
      }
    }
  }

  function usersExists(email) {
    return new Promise(function (result, reject) {
      let usersData = Cookies.getJSON('users');
      if (usersData) {
        const userDB = Object.keys(usersData).filter(index => usersData[index].email === email);
        if (userDB.length > 0)
          result(true);
        else
          result(false);
      }
      else
        result(false);
    })
  }

  return (
    <div className="register-wrapper">
      <img
        src={VinnBoxLogo}
        width={90}
        height={60}
        style={{ alignSelf: "center" }}
        alt="logo"
      />
      <div className="card">
        <h2 className="title">Cadastre-se</h2>
        <div className="body">
          <form onSubmit={submitForm} className="form-group">
            <label htmlFor="email">Nome</label>
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Digite seu nome"
            />
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
              type="password"
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
