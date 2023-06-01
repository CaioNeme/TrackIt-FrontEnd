import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import React, { useState } from 'react';


export default function Register() {

  const navigate = useNavigate();
  const [register, setRegister] = useState({
    email: "",
    name: "",
    image: "",
    password: ""
  });


  function handleChange(event) {
    const newRegister = { ...register };
    newRegister[event.target.name] = event.target.value;
    setRegister(newRegister);

  }

  return (
    <Size>
      <LogoText>
        <img src={Logo} alt="" />
        <p>TrackIt</p>
      </LogoText>
      <Form onSubmit={event => {
        event.preventDefault();

        let post = register;

        const URLPostRegister = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"

        const promise = axios.post(URLPostRegister, post);

        promise.then(resposta => {
          console.log(resposta.data);
          navigate("/")
        });

        promise.catch(erro => {
          console.log(register);
          console.log(erro);
          setRegister({
            email: "",
            name: "",
            image: "",
            password: ""
          });
          alert(erro.response.data.message);
        })

      }}>
        <input data-test="email-input" required onChange={handleChange} value={register.email} name="email" placeholder="E-mail" type="email" />
        <input data-test="password-input" required onChange={handleChange} value={register.password} name="password" placeholder="Senha" type="password" />
        <input data-test="user-name-input" required onChange={handleChange} value={register.name} name="name" placeholder="Nome" type="text" />
        <input data-test="user-image-input" required onChange={handleChange} value={register.image} name="image" placeholder="Foto" type="url" />

        <button data-test="signup-btn">Cadastrar</button>
      </Form>
      <Link to={"/"}>
        <LogIn data-test="login-link"><p>Já tem uma conta? Faça o login!</p></LogIn>
      </Link>
    </Size>
  );
}

const Size = styled.div`
  width:375px;
  height:667px;
  background-color:#FFF;
`;
const LogoText = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  img{
      margin-top:60px;
  }
  p{
    width: 180px;
    height: 86px;

    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 69px;
    line-height: 86px;

    text-align: center;

    color: #126BA5;
  }
`;
const Form = styled.form`  
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  margin-top:33px;

  input{
    cursor: pointer;

    box-sizing:border-box;

    width: 303px;
    height: 45px;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    margin-bottom:6px;

    color: #000;
  }
  button{
    appearance:none;
    border-width: none;
    border-style: none;
    border-color: none;
    border-image: none;
    display:flex;
    justify-content:center;
    align-items:center;


    width: 303px;
    height: 45px;

    background: #52B6FF;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;

    color: #FFFFFF;
    cursor: pointer;

  }
`;
const LogIn = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;

  margin-top:25px;

  cursor: pointer;

  p{
    width: 232px;
    height: 17px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

    color: #52B6FF;
  }
`