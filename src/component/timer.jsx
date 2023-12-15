import { useState } from "react";
import styled from "styled-components";
import Clock from "./clock";
import Buttons from "./buttons";

function Timer() {
  const [progressValue, setProgressValue] = useState(100);

  return (
    <>
    <TimerContainer progressValue={progressValue} >
      <div className="overlay">
        <div className="circal">
          <Clock setProgressValue={setProgressValue} progressValue={progressValue}/>
        </div>
      </div>
    </TimerContainer>
    <Buttons/>
    </>
  );
}

export default Timer;

const TimerContainer = styled.div`
  width: 100%;
  margin: 2.5rem auto;
  transition: all 0.3s ease-in-out;
  .overlay {
    width: 400px;
    margin: auto;
    display: grid;
    align-items: center;
    transition: all 0.3s ease-in-out;
    background: conic-gradient(
      #2bbaf3 ${({ progressValue }) => progressValue}%,
      white ${({ progressValue }) => progressValue}%
    );
    border-radius: 50%;
    height: 400px;
  }
  .circal {
    width: 370px;
    height: 370px;
    border-radius: 50%;
    margin: auto;
    display: grid;
    align-items: center;
    background-color: white;
  }
`;
