import React from 'react';
import styled from 'styled-components';

import profile from '../public/images/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const StyledTitleBarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 1.1rem;

  .mode {
    display: flex;
    align-items: center;
    gap: 10px;

    :hover {
      cursor: pointer;
    }
  }
`;

function TitleBarContainer() {
  return (
    <StyledTitleBarContainer>
      <h3>devfinder</h3>
    </StyledTitleBarContainer>
  );
}

export default TitleBarContainer;
