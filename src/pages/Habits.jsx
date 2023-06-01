import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Week from "../components/Week";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { UserDataContext } from "../context/UserDataContext";


export default function Habitis() {


  const weekdays = [
    { day: "D", days: 0 },
    { day: "S", days: 1 },
    { day: "T", days: 2 },
    { day: "Q", days: 3 },
    { day: "Q", days: 4 },
    { day: "S", days: 5 },
    { day: "S", days: 6 }
  ];

  const [habitDay, setHabitDay] = useState([]);
  const [habitName, setHabitiName] = useState({ name: "" });
  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { userData } = useContext(UserDataContext);
  const [variavel, setVariavel] = useState(0);
  const config = {
    headers: {
      "Authorization": `Bearer ${userData.token}`
    }
  }

  useEffect(() => {
    const URLGetTask = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const promise = axios.get(URLGetTask, config);

    promise.then(resposta => setTask(resposta.data));

  }, [variavel]);

  function handleChange(event) {
    const newHabitName = { ...habitName };
    newHabitName[event.target.name] = event.target.value;
    setHabitiName(newHabitName);
  }

  return (
    <Size>
      <Header />
      <Head>
        <p>Meus hábitos</p>
        <div onClick={() => setOpen(true)}>+</div>
      </Head>
      {open === true && <NewHabitis onSubmit={event => {
        event.preventDefault();
        setLoading(true);

        const URLPostNewTask = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const body = {
          name: `${habitName.name}`,
          days: habitDay
        }
        const promise = axios.post(URLPostNewTask, body, config)

        promise.then(() => {
          setVariavel(variavel + 1);
          setLoading(false);
          setOpen(false);
          setHabitiName({ name: "" });
          setHabitDay([]);
        })

        promise.catch(erro => alert(erro.response.data.message));

      }}>
        <input name="name" value={habitName.name} onChange={handleChange} placeholder="Nome do Hábito" type="text" />
        <div>
          {weekdays.map(info => <Week
            habitDay={habitDay}
            setHabitDay={setHabitDay}
            {...info}
          />)}
        </div>
        <Buttons>
          <Cancel type="button" onClick={() => {
            setOpen(false);
            setHabitiName({ name: "" });
            setHabitDay([]);
            setLoading(false);
          }}>Cancelar</Cancel>
          {loading === false && <Save type="submit">Salvar</Save>}
          {loading === true && <Save type="submit">
            <ThreeDots
              height="35"
              width="50"
              radius="9"
              color="#FFF"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </Save>}
        </Buttons>
      </NewHabitis>}
      {task.length !== 0 && task.map(dadosTask =>
        <Task>
          <div>
            <Text>{dadosTask.name}</Text>
            <ion-icon onClick={() => {
              const URLDeletTask = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${dadosTask.id}`

              const promise = axios.delete(URLDeletTask, config)

              promise.then(resposta => {
                setVariavel(variavel + 1);
              }).catch(erro => {
                alert(erro.response.data.message);
              });

            }} name="trash-outline" />
          </div>
          <div>
            {weekdays.map(info => dadosTask.days.includes(info.days) ? <WeekdaysSelect key={info.number}>{info.day}</WeekdaysSelect> : <Weekdays key={info.number}>{info.day}</Weekdays>)}
          </div>
        </Task>
      )}
      {task.length === 0 && <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>}
      <Footer />
    </Size >
  );
}

const WeekdaysSelect = styled.p`
  cursor: pointer;

  display:flex;
  justify-content:center;
  align-items:center;

  width: 30px;
  height: 30px;

  margin-right:4px;

  background: #CFCFCF;
  border: 1px solid #D5D5D5;
  border-radius: 5px;

  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;

  color: #FFF;
`;
const Size = styled.div`
  width:375px;
`;
const Task = styled.div`
  width: 340px;
  height: 91px;

  background-color:#FFF;
  margin: 0px 17px 10px 17px;
  border-radius: 5px;
  
  div{
    display:flex;
    justify-content:flex-start;
    align-items:center;

    position:relative;
    margin-left:15px;
    p{
      margin-top:13px;
      margin-left:0px;
    }

    ion-icon{
      cursor: pointer;
      position: absolute;
      top:11px;
      right:10px;
      width:20px;
      height:20px;
      color: #666666;
    }
  }
`;
const Save = styled.button`
  appearance:none;
  border-width: none;
  border-style: none;
  border-color: none;
  border-image: none;

  width: 84px;
  height: 35px;

  margin-right:15px;

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
const Cancel = styled.button`
  appearance:none;
  border-width: none;
  border-style: none;
  border-color: none;
  border-image: none;

  width: 69px;
  height: 20px;

  margin-right:25px;

  background-color:#FFF;

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

const NewHabitis = styled.form`
  width: 340px;
  height: 180px;

  margin:auto;
  margin-bottom:10px;

  background: #FFFFFF;
  border-radius: 5px;
  input{
    cursor: pointer;

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
  }
`;
const Weekdays = styled.p`
  cursor: pointer;

  display:flex;
  justify-content:center;
  align-items:center;

  width: 30px;
  height: 30px;

  margin-right:4px;

  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 5px;

  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;

  color: #DBDBDB;
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

const Head = styled.div`
  width:375px;

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
