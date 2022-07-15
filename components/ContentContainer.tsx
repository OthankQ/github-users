import React from 'react';
import styled from 'styled-components';

import profile from '../public/images/profile.png';

const StyledContentContainer = styled.div`
  width: 100%;
  height: 440px;
  display: flex;
  background-color: #2b3d66;
  border-radius: 10px;
  padding: 30px;

  .profile-pic-container {
    width: 20%;
    display: flex;
    justify-content: center;

    img {
      display: block;
      height: 100px;
      width: 100px;
      border-radius: 50%;
    }
  }
`;

export default function ContentContainer() {
  return (
    <StyledContentContainer>
      <div className="profile-pic-container">
        <img src={profile.src} alt="profile picture" />
      </div>
    </StyledContentContainer>
  );
};


