import React from 'react';
import styled from 'styled-components';

const StyledTitleBarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

function TitleBarContainer() {
  return (
    <StyledTitleBarContainer>
      <h3>devfinder</h3>
      <p>Light</p>
    </StyledTitleBarContainer>
  );
}

export default TitleBarContainer;
