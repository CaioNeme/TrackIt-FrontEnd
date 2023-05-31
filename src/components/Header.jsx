import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header(props) {
  const { imgUser } = props
  return (
    <>
      <Shadow />

      <Head>
        <Link to={"/"}>
          <p>TrackIt</p>
        </Link>
        <img src={imgUser} alt="Foto do usuario" />
      </Head>
    </>
  )
}


const Shadow = styled.div`
  width: 375px;
  height: 70px;
`;

const Head = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;

  position:fixed;
  left:0px;
  top:0px;

  width: 375px;
  height: 70px;

  background: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  p{
    width: 97px;
    height: 49px;

    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 39px;
    line-height: 49px;

    margin-left:15px;

    color: #FFFFFF;
  }
  img{
    width: 51px;
    height: 51px;

    border-radius: 98px;
    
    margin-right:15px;
  }
`