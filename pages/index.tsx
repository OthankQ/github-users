import React from 'react';
import styled from 'styled-components';

import MainContainer from '../components/MainContainer';

const StyledDiv = styled.div`
  background-color: hsl(222, 40%, 13%);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home({}) {
  return (
    <StyledDiv>
      <MainContainer />
    </StyledDiv>
  );
}
