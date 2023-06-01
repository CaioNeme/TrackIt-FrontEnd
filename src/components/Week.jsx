import { useState } from "react";
import styled from "styled-components";

export default function Week(props) {

  const [select, setSelect] = useState(false)
  const { habitDay, setHabitDay, days, number } = props;


  return (
    <>
      {select === false && (<Weekdays key={number} onClick={() => {
        setSelect(true);
        setHabitDay([...habitDay, days])
      }}>{props.day}</Weekdays>)}
      {select === true && (<WeekdaysSelect key={number} onClick={() => {
        setSelect(false);
        setHabitDay(habitDay.filter(a => a != days))
      }}>{props.day}</WeekdaysSelect>)}
    </>
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