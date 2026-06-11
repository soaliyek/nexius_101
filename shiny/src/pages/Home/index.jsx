import { useState } from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const Balloon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #e20202;
  transform: scale(${props => props.size});
`;

export function getSum(a, b){
  return a + b;
}

function Home() {
  const [size, setSize] = useState(1);


  return (
    <HomeContainer>
      <h1 onClick={() => setSize(size + 0.1)}>Welcome to Shiny!</h1>
      <Balloon size={size} />
      <h2>{ getSum(2000, 26) }</h2>
    </HomeContainer>
  );
}


export default Home;
