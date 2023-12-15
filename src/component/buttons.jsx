import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";

function Buttons({ text, icon }) {
  return (
    <ButtonContainer>
      <button>
        <FaPlay  fontSize="24px"/>
        Start
      </button>
      <button>
        <GrPowerReset  fontSize="24px"/>
        Reset
      </button>
      <button>
        <IoMdSettings fontSize="26px" />
        Settings
      </button>
    </ButtonContainer>
  );
}

export default Buttons;

const ButtonContainer = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    all: unset;
    flex: 1;
    margin: 0 15px;
    padding: 8px 20px;
    font-size: 1.2rem;
    border-radius: 25px;
    font-weight: 500;
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
  }
  button:nth-child(1){
    background-color:#28A745;
    color:#fff;
  }
  button:nth-child(2){
    background-color:#FFC107;
    color:#222
  }
  button:nth-child(3){
    background-color:#17A2B8;
    color:#fff;
  }
`;
