import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { contentContainerProps } from './ContentContainer';

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

  const [searchStr, setSearchStr] = useState('');
  const [searchResult, setSearchResult] = useState({
    avatar_url: '',
    name: '',
    created_at: '',
    login: '',
    bio: '',
    public_repos: 0,
    followers: 0,
    following: 0,
    location: '',
    twitter_username: '',
    blog: '',
    company: '',
  });

  function handleSearchChange(event: React.FormEvent<HTMLInputElement>) {
    setSearchStr(event.currentTarget.value);
  }

  function searchBtnClick() {
    fetch(`https://api.github.com/users/${searchStr}`)
      .then(res => res.json())
      .then(data => setSearchResult(data));
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/octocat`)
      .then(res => res.json())
      .then(data => setSearchResult(data));
  }, []);

  return (
    <StyledMainContainer>
      <TitleBarContainer></TitleBarContainer>
      <SearchBarContainer onChange={handleSearchChange} onSearchClick={searchBtnClick}></SearchBarContainer>
      <ContentContainer searchResult={searchResult}></ContentContainer>
    </StyledMainContainer>
  );
};

