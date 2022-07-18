import React, { useState, useEffect, forwardRef } from 'react';
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

export type contentContainerProps = {
  searchResult: {
    avatar_url: string,
    name: string,
    created_at: string,
    login: string,
    bio: string,
    public_repos: number,
    followers: number,
    following: number,
    location: string,
    twitter_username: string,
    blog: string,
    company: string,
  };
};

export default function ContentContainer(props: contentContainerProps) {

  const [avatarUrl, setAvatarUrl] = useState('');
  const [username, setUsername] = useState('');
  const [joinedDate, setJoinedDate] = useState('');
  const [handler, setHandler] = useState('');
  const [bio, setBio] = useState('');
  const [repos, setRepos] = useState('');
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [location, setLocation] = useState('');
  const [twitter, setTwitter] = useState('');
  const [blog, setBlog] = useState('');
  const [company, setCompany] = useState('');

  useEffect(() => {
    // Check if searchResult is not null
    if (Object.keys(props.searchResult).length) {
      setAvatarUrl(props.searchResult.avatar_url);
      setUsername(props.searchResult.name);
      setJoinedDate(formatDate(props.searchResult.created_at));
      setHandler(`@${props.searchResult.login}`);
      setBio(props.searchResult.bio);
      setRepos(props.searchResult.public_repos.toString());
      setFollowers(props.searchResult.followers);
      setFollowing(props.searchResult.following);
      setLocation(props.searchResult.location);
      setTwitter(props.searchResult.twitter_username);
      setBlog(props.searchResult.blog);
      setCompany(props.searchResult.company);
    }
  }, [props.searchResult])

  function formatDate(joinedDate: string): string {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const d = new Date(joinedDate);
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    const formattedDate = `${date} ${month} ${year}`;

    return formattedDate;
  }

  return (
    <StyledContentContainer>
      <div className="profile-pic-container">
        <img src={avatarUrl} alt="profile picture" />
      </div>

      <div className="info-container">
        <div className="username-and-joined-date">
          <div className="username">
            <h3>{username}</h3>
          </div>
          <div className="joined-date">
            <p>Joined {joinedDate}</p>
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
          <div className="location" style={{color: props.searchResult.location ? 'white' : 'grey'}}>
            <FontAwesomeIcon
              icon={faLocationDot}
            />
            <p>{location ?? 'Unavailable'}</p>
          </div>
          <div className="twitter unavailable" style={{color: props.searchResult.twitter_username ? 'white' : 'grey'}}>
            <FontAwesomeIcon
              icon={faDove}
            />
            <p>{twitter ?? 'Unavailable'}</p>
          </div>
          <div className="blog" style={{color: props.searchResult.blog ? 'white' : 'grey'}}>
            <FontAwesomeIcon
              icon={faLink}
            />
            <p>{blog == "" ? 'Unavailable' : blog}</p>
          </div>
          <div className="company" style={{color: props.searchResult.company ? 'white' : 'grey'}}>
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
