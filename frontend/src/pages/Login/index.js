import React, { useState } from "react";
import "./styles.scss";

import { Link, useLocation } from "wouter";
import { BaseButton, BaseModal } from "../../components";
import dividerCard from "../../assets/images/card-divider.png";
import footerImgLogin from "../../assets/images/login-footer-img.png";
import VinnBoxLogo from "../../assets/images/VINNBOX.png";
import Cookies from "js-cookie";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [, setLocation] = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [recPass, setRecPass] = useState("");

  function handleInputChange(event) {
    const { value, name } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function submitForm(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!reg.test(email)) alert("Email inválido!");
    else {
      const checkUser = await usersExists(email, pass, false);
      if (checkUser) {
        setLocation("/home");
      }
    }
  }

  function usersExists(email, senha, recSenha) {
    return new Promise(function (result, reject) {
      let usersData = Cookies.getJSON("users");
      if (usersData) {
        const userDB = Object.keys(usersData)
          .filter((index) => usersData[index].email === email)
          .map((index) => {
            return usersData[index];
          });
        if (recSenha) {
          console.log(userDB);
          if (userDB.length > 0) {
            setRecPass(userDB[0].senha);
            setShowPass(true);
          } else {
            alert("Email não cadastrado! Crie uma conta antes de continuar.");
            result(false);
          }
        } else {
          if (userDB.length > 0) {
            if (userDB[0].senha !== senha) {
              alert("Senha inválida, tente novamente!");
              result(false);
            } else result(true);
          } else {
            alert("Email não cadastrado! Crie uma conta antes de continuar.");
            result(false);
          }
        }
      } else result(false);
    });
  }

  async function recPassword() {
    var recEmail = document.getElementById("recEmail").value;

    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!reg.test(recEmail)) alert("Email inválido!");
    else await usersExists(recEmail, "", true);
  }

  function closeModalRec() {
    setRecPass("");
    setShowPass(false);
    setOpenModal(false);
  }

  return (
    <div className="login-wrapper">
      <BaseModal title={"Adicionar Template"} visibility={openModal} setVisibility={setOpenModal}>
        {!showPass ? (
          <>
            <input placeholder="Digite seu email de recuperação" id="recEmail" />
            <BaseButton onClick={() => recPassword()} type={"button"}>
              Recuperar senha
            </BaseButton>
          </>
        ) : (
          <>
            <span
              style={{
                textAlign: "center",
                marginTop: "25px",
                marginBottom: "25px",
                fontFamily: "monospace",
                fontWeight: 600,
                fontSize: "20px",
              }}
            >
              Sua senha é: {recPass}
            </span>
            <BaseButton onClick={() => closeModalRec()} type={"submit"}>
              Confirmar
            </BaseButton>
          </>
        )}
      </BaseModal>
      <img src={VinnBoxLogo} width={90} height={60} style={{ alignSelf: "center" }} alt="logo" />
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

            <span className="forgot-pass-link link-effect" onClick={() => setOpenModal(true)}>
              Esqueceu a senha ?
            </span>

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

      <img draggable="false" className="footer-img" src={footerImgLogin} alt="background draw" />
    </div>
  );
};

export default Login;
