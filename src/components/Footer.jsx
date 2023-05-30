import styled from "styled-components";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <>
      <Shadow />
      <Foot>
        <Link to={"/habitos"}>
          <p>Hábitos</p>
        </Link>
        <CircleBigBlue>
          <WhiteCircle>
            <CircleSmallBlue>
              <Link to={"/hoje"}>
                <p>Hoje</p>
              </Link>
            </CircleSmallBlue>
          </WhiteCircle>
        </CircleBigBlue>
        <Link to={"/historico"}>
          <p>Histórico</p>
        </Link>
      </Foot>
    </>
  );
}

const Shadow = styled.div`
  width: 375px;
  height: 70px;
`;

const Foot = styled.div`
  position:fixed;
  bottom:0px;
  left:0px;

  width: 375px;
  height: 70px;

  background-color: #FFFFFF;

  display:flex;
  justify-content:space-around;
  align-items:center;

  p{
    width: 68px;
    height: 22px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;

    color: #52B6FF;
  }

`;
const CircleBigBlue = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;

  margin-bottom:40px;

  width: 91px;
  height: 91px;

  background: #52B6FF;
  border-radius:50%;
`;
const WhiteCircle = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;

  background: #FFFFFF;
  border-radius:50%;

  width: 81px;
  height: 81px;
`;
const CircleSmallBlue = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;

  background: #52B6FF;
  border-radius:50%;

  width: 66px;
  height: 66px;
  p{
    color:#fff
  }
`;