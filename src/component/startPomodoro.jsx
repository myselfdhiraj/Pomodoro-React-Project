import styled from "styled-components";

function StartPomodoro({ togglePomodoro }) {
  return (
    <HomeDiv>
      <div className="img_div">
        <img src="/images/clock.png" alt="" />
      </div>
      <div className="content_div">
        <h1>POMODORO CLOCK</h1>
        <div className="btn_div">
          <button onClick={togglePomodoro}>Start Session</button>
        </div>
      </div>
    </HomeDiv>
  );
}

export default StartPomodoro;

const HomeDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .img_div img {
    width: 400px;
    object-fit: cover;
    object-position: center;
  }
  .content_div h1{
    text-align: center;
    font-size: 5rem;
    font-weight: 800;
  }
  .btn_div{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .btn_div button{
    all: unset;
    padding: 10px 30px;
    background-color: black;
    font-size: 1.2rem;
    border-radius: 25px;
    color: white;
    font-weight: 500;
    border: 5px solid transparent;
    transition: all 0.1s ease-in;

    &:hover{
        background-color: white;
    border: 5px solid black;
    color: black;

    }
  }
`;
