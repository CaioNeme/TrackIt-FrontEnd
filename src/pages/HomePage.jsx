import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";

export default function HomePage() {
  return (
    <>
      <LogoText>
        <img src={Logo} alt="" />
        <p>TrackIt</p>
      </LogoText>
      <Form>
        <input placeholder="E-mail" type="email" />
        <input placeholder="Senha" type="password" />
        <div>Entrar</div>
      </Form>
      <SignUp><p>Não tem uma conta? Cadastre-se!</p></SignUp>
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
  div{
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

  }
`;
const SignUp = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:25px;
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