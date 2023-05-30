import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Habitis() {
  return (
    <>
      <Header />
      <Head>
        <p>Meus hábitos</p>
        <div>+</div>
      </Head>

      <NewHabitis>
        <input placeholder="Nome do Hábito" type="text" />
        <div>
          <p>D</p>
          <p>S</p>
          <p>T</p>
          <p>Q</p>
          <p>Q</p>
          <p>S</p>
          <p>S</p>
        </div>
        <Buttons>
          <Cancel>Cancelar</Cancel>
          <Save>Salvar</Save>
        </Buttons>
      </NewHabitis>

      <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
      <Footer />
    </>
  );
}

const Save = styled.div`
  width: 84px;
  height: 35px;

  justify-content:center;

  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  text-align: center;
  background: #52B6FF;
  border-radius: 5px;
  color: #FFF;
`;
const Cancel = styled.div`
  width: 69px;
  height: 20px;

  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  text-align: center;

  color: #52B6FF;
`;
const Buttons = styled.span`
  display:flex;
  justify-content:flex-end;
  align-items:center;

  margin-top:25px;
  margin-bottom:15px;
`;

const NewHabitis = styled.div`
  width: 340px;
  height: 180px;

  margin:auto;

  background: #FFFFFF;
  border-radius: 5px;
  input{
    width: 303px;
    height: 45px;

    background: #FFFFFF;
    border: 2px solid #b3b2b2;
    border-radius: 5px;

    margin:18px 18px 10px 18px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;

    color: #000;
  }
  div{
    display:flex;
    align-items:center;

    margin:0px 18px 10px 18px;
    p{
      display:flex;
      justify-content:center;
      align-items:center;

      width: 30px;
      height: 30px;

      margin-left:4px;

      background: #FFFFFF;
      border: 1px solid #D5D5D5;
      border-radius: 5px;

      font-family: 'Lexend Deca';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;

      color: #DBDBDB;
    }
  }
`;
const Text = styled.p`
  width: 338px;
  height: 74px;

  display:flex;
  justify-content:center;
  align-items:center;
  margin-left:17px;
  margin-right:17px;

  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #666666;
`;

const Head = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;

  margin-top:20px;
  margin-bottom:29px;

  p{
    width: 148px;
    height: 29px;

    margin-left:17px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;

    color: #126BA5;
  }
  div{
    display:flex;
    justify-content:center;
    align-items:center;

    margin-right:17px;

    width: 40px;
    height: 35px;

    background: #52B6FF;
    border-radius: 5px;
    color:#fff;
    font-weight:bold;
  }
`;