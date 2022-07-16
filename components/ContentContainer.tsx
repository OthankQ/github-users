import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import profile from '../public/images/profile.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faDove,
  faLink,
  faCity,
} from "@fortawesome/free-solid-svg-icons";

const StyledContentContainer = styled.div`
  width: 100%;
  min-height: 400px;
  height: auto;
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

    .other-info {
      height: 100px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      align-items: end;

      .location, .twitter, .blog, .company {
        display: flex;
        gap: 20px;
        align-items: center;
        color: white;
      }

      .blog {
        gap: 12px;
      }

      .company {
        gap: 15px;
      }

      .unavailable {
        color: grey;
      }
    }
  }
`;

export default function ContentContainer() {

  const [searchStr, setSearchStr] = useState('');
  const [username, setUsername] = useState('');
  const [joinedDate, setJoinedDate] = useState('');
  const [handler, setHandler] = useState('');
  const [bio, setBio] = useState('');
  const [repos, setRepos] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [location, setLocation] = useState('');
  const [twitter, setTwitter] = useState('');
  const [blog, setBlog] = useState('');
  const [company, setCompany] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/octocat')
      .then(res => res.json())
      .then(data => {
        setUsername(data.name);
        setJoinedDate(data.created_at);
        setHandler(`@${data.login}`);
        setBio(data.bio);
        setRepos(data.public_repos.toString());
        setFollowers(data.followers);
        setFollowing(data.following);
        setLocation(data.location);
        setTwitter(data.twitter_username);
        setBlog(data.blog);
        setCompany(data.company);
      })
  })

  return (
    <StyledContentContainer>
      <div className="profile-pic-container">
        <img src={profile.src} alt="profile picture" />
      </div>

      <div className="info-container">
        <div className="username-and-joined-date">
          <div className="username">
            <h3>{username}</h3>
          </div>
          <div className="joined-date">
            <p>{joinedDate}</p>
          </div>
        </div>
        <div className="handler">
          <p>{handler}</p>
        </div>
        <div className="bio">
          <p>{bio ?? 'Unavailable'}</p>
        </div>
        <div className="repo-and-follow">
          <div className="repos">
            <p>Repos</p>
            <h3>{repos}</h3>
          </div>
          <div className="followers">
            <p>Followers</p>
            <h3>{followers}</h3>
          </div>
          <div className="following">
            <p>Following</p>
            <h3>{following}</h3>
          </div>
        </div>
        <div className="other-info">
          <div className="location">
            <FontAwesomeIcon
              icon={faLocationDot}
            />
            <p>{location ?? 'Unavailable'}</p>
          </div>
          <div className="twitter unavailable">
            <FontAwesomeIcon
              icon={faDove}
            />
            <p>{twitter ?? 'Unavailable'}</p>
          </div>
          <div className="blog">
            <FontAwesomeIcon
              icon={faLink}
            />
            <p>{blog ?? 'Unavailable'}</p>
          </div>
          <div className="company">
            <FontAwesomeIcon
              icon={faCity}
            />
            <p>{company ?? 'Unavailable'}</p>
          </div>
        </div>
      </div>
    </StyledContentContainer>
  );
};


