import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";


export default function Register() {
  return (
    <>
      <LogoText>
        <img src={Logo} alt="" />
        <p>TrackIt</p>
      </LogoText>
      <Form>
        <input required placeholder="E-mail" type="email" />
        <input required placeholder="Senha" type="password" />
        <input required placeholder="Nome" type="text" />
        <input required placeholder="Foto" type="url" />

        <button>Cadastrar</button>
      </Form>
      <LogIn><p>Já tem uma conta? Faça o login!</p></LogIn>
    </>
  );
}

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