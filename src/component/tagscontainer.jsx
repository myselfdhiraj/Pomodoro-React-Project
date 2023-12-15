import { useState } from 'react';
import styled ,{css} from 'styled-components';

function TagsContainer() {
    const [isActiveTag,setIsActiveTag] = useState(0)

    const activeTag = (index)=>{
        setIsActiveTag(index)
    }
  return (
    <TagContainer>
      {["Work","Short Brack","Long Brack"].map((text,i)=>(
        <TagsBtn onClick={()=> activeTag(i)} isActiveTag={isActiveTag === i} key={i}>{text}</TagsBtn>
      ))}

    </TagContainer>
  )
}

export default TagsContainer

const TagContainer = styled.div`
width: 100%;
margin: 1rem auto;
background-color: #e9e9e9;
border-radius: 25px;
display: flex;
align-items: center;
gap: 10px;
`;
const TagsBtn = styled.button`
all:unset;
flex: 1;
text-align: center;
font-weight: 500;
color:white;
font-size: 1.1rem;
padding: 8px 20px;
border-radius: 25px;
color: black;

${({isActiveTag})=>
isActiveTag && css`
    background-color: #2bbaf3;
    color:white;
`
}

`;