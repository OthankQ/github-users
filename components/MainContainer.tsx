import React, { useState } from 'react';
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
  padding: 30px;
  gap: 10px;
`;

export default function MainContainer() {

  const [searchStr, setSearchStr] = useState('')

  function handleSearchChange(event: React.FormEvent<HTMLInputElement>) {
    setSearchStr(event.currentTarget.value);
    console.log(searchStr);
  }

  return (
    <StyledMainContainer>
      <TitleBarContainer></TitleBarContainer>
      <SearchBarContainer onChange={handleSearchChange}></SearchBarContainer>
      <ContentContainer searchStr={searchStr}></ContentContainer>
    </StyledMainContainer>
  );
};

