import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useContext, useState } from "react";
import { UserDataContext } from "../context/UserDataContext";
import { ProgressBarContext } from "../context/ProgressBarContext";
import axios from "axios";

export default function Today() {
  const { setProgressBar } = useContext(ProgressBarContext);
  const { userData } = useContext(UserDataContext);
  const [task, setTask] = useState([]);
  const [completed, setCompleted] = useState(0);
  let n = 0;


  const config = {
    headers: {
      "Authorization": `Bearer ${userData.token}`
    }
  }

  useEffect(() => {
    const URLGetTask = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    const promise = axios.get(URLGetTask, config);

    promise.then(resposta => {
      setTask(resposta.data)
    });

  }, [completed]);

  task.map(dado => {
    if (dado.done === true) {
      n++;
    }
  });
  setProgressBar((n / task.length) * 100);

  return (
    <Size>
      <Header />
      <div>
        <Head>
          <h1>Segunda, 17/05</h1>
          {n === 0 ? <p>Nenhum hábito concluído ainda</p> : <p><Completed>{(n / task.length) * 100 + "% dos hábitos concluídos"}</Completed></p>}
        </Head>
        {task.map(dado =>
          <Task>
            <div>
              <h1>{dado.name}</h1>
              <p>Sequência atual: {dado.currentSequence} dias</p>
              <p>Seu recorde: {dado.highestSequence} dias</p>
            </div>
            {dado.done === true ? <Completed onClick={() => {
              const URLPostUnCheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${dado.id}/uncheck`;
              const body = {};
              const promise = axios.post(URLPostUnCheck, body, config)

              promise.then(() => setCompleted(completed - 1)).catch(erro => console.log(erro.response.data.message))

            }}><ion-icon name="checkbox"></ion-icon></Completed> :
              <ToDo onClick={() => {
                const URLPostCheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${dado.id}/check`;
                const body = {};
                const promise = axios.post(URLPostCheck, body, config)

                promise.then(() => setCompleted(completed + 1)).catch(erro => console.log(erro.response.data.message))

              }}><ion-icon name="checkbox"></ion-icon></ToDo>}
          </Task>)}
        {task.length === 0 && <Text>Você não tem nenhum hábito hoje.</Text>}

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
const Text = styled.p`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-left:17px;
  margin-right:17px;
  margin-top:20px;

  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #666666;
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
  margin-bottom:10px;
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

    border-radius: 5px;
  }
`;
const Completed = styled.div`
  color:#8FC549;

`;
const ToDo = styled.div`
  color:#EBEBEB;
`;