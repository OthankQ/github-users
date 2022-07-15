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
  color: white;

  .profile-pic-container {
    width: 20%;
    display: flex;

    img {
      display: block;
      height: 100px;
      width: 100px;
      border-radius: 50%;
    }
  }

  .info-container {
    width: 80%;
    display: flex;
    flex-direction: column;

    .username-and-joined-date {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 40px;

      .username {
        width: 200px;

        h3 {
          font-size: 1.5rem;
        }
      }

      .joined-date {
        width: 300px;
        display: flex;
        flex-direction: row-reverse;
      }
    }

    .handler {
      display: flex;
      height: 40px;
      color: hsl(212,88%,45%);
    }

    .bio {
      height: auto;
      margin-bottom: 20px;
    }

    .repo-and-follow {
      width: 100%;
      height: 80px;
      background-color: hsl(222,40%,13%);
      border-radius: 10px;
      display: flex;
      padding: 30px;
      gap: 150px;
      align-items: center;

      p {
        font-size: 0.8rem;
      }

      h3 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default function ContentContainer() {
  return (
    <StyledContentContainer>
      <div className="profile-pic-container">
        <img src={profile.src} alt="profile picture" />
      </div>

      <div className="info-container">
        <div className="username-and-joined-date">
          <div className="username">
            <h3>The Octocat</h3>
          </div>
          <div className="joined-date">
            <p>Joined 25 Jan 2011</p>
          </div>
        </div>
        <div className="handler">
          <p>@octocat</p>
        </div>
        <div className="bio">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem illo debitis quae quibusdam at ea facere itaque et similique!</p>
        </div>
        <div className="repo-and-follow">
          <div className="repos">
            <p>Repos</p>
            <h3>8</h3>
          </div>
          <div className="followers">
            <p>Followers</p>
            <h3>3938</h3>
          </div>
          <div className="following">
            <p>Following</p>
            <h3>9</h3>
          </div>
        </div>
        <div className="other-info"></div>
      </div>
    </StyledContentContainer>
  );
};


