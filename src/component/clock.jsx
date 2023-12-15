import { useEffect, useState } from "react";
import styled from "styled-components";

function Clock({ setProgressValue, progressValue }) {
  const [time, setTime] = useState(120);
  const [isActive, setIsActive] = useState(true);

  const startSession = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    if (isActive && time > 0) {
      const intrval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(intrval);
    }
  }, [time, setProgressValue, progressValue]);

  const getTime = (time) => {
    const getMin = Math.floor(time / 60);
    const getSec = time % 60;
    return `${getMin < 10 ? "0" + getMin : getMin}:${
      getSec < 10 ? "0" + getSec : getSec
    }`;
  };

  return (
    <ClockContainer>
      <TimerText>{getTime(time)}</TimerText>
    </ClockContainer>
  );
}

export default Clock;

const ClockContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TimerText = styled.h3`
  font-size: 6.5rem;
  color: #222;
`;
