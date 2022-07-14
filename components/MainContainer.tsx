import React from 'react';
import styled from 'styled-components';

import TitleBarContainer from './TitleBarContainer';
import SearchBarContainer from './SearchBarContainer';
import ContentContainer from './ContentContainer';

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 600px;
  width: 800px;
  padding: 5px;
  gap: 10px;
`;

export default function MainContainer() {
  return (
    <StyledMainContainer>
      <TitleBarContainer></TitleBarContainer>
      <SearchBarContainer></SearchBarContainer>
      <ContentContainer></ContentContainer>
    </StyledMainContainer>
  );
};

