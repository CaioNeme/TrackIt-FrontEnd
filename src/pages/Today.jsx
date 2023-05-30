import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Today() {
  return (
    <Size>
      <Header />
      <div>
        <Head>
          <h1>Segunda, 17/05</h1>
          <p>Nenhum hábito concluído ainda</p>
        </Head>
        <Task>
          <div>
            <h1>Ler 1 capítulo de livro</h1>
            <p>Sequência atual: 3 dias</p>
            <p>Seu recorde: 5 dias</p>
          </div>
          <ion-icon name="checkbox"></ion-icon>
        </Task>
      </div>
      <Footer />
    </Size>
  );
}

const Size = styled.div`
  width:375px;
`;
const Head = styled.div`
  margin: 28px 0px 28px 17px;
  h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;

    color: #126BA5;
  }
  p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #BABABA;
  }
`;

const Task = styled.div`
  display: flex;
  justify-content:space-around;
  align-items:center;

  width: 340px;
  height: 94px;

  background: #FFFFFF;
  border-radius: 5px;

  margin:auto;
  div{
    h1{
      font-family: 'Lexend Deca';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;

      color: #666666;
    }
    p{
      font-family: 'Lexend Deca';
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;

      color: #666666;
    }
  }
  ion-icon{
    width: 69px;
    height: 69px;

    color: #EBEBEB;
    border-radius: 5px;
  }
`;