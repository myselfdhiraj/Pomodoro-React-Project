import styled from 'styled-components';
import TagsContainer from './tagscontainer';
import Timer from './timer';

function PomodoroHome() {
  return (
    <>
    <MainHeading>Pomodoro Session</MainHeading>
    <MainContainer>
    <TagsContainer/>
    <Timer/>
    </MainContainer>
    </>
  )
}

export default PomodoroHome

const MainHeading = styled.h1`
font-size: 5rem;
margin: 2rem auto;
color: #fff;
text-align: center;
`;
const MainContainer = styled.div`
width: 500px;
margin: auto;
text-align: center;
`;