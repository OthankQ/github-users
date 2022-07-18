import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch
} from "@fortawesome/free-solid-svg-icons";

const StyledSearchBarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2b3d66;
  border-radius: 10px;
  padding: 5px;

  .search-input {
    width: 700px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;

    input {
      width: 100%;
      height: 30px;
      background: #2b3d66;
      border: none;
      font-size: 1.2rem;
      color: white;
      margin-left: 20px;

      :focus {
        outline: none;
      }
    }
  }

  .btn-search {
      min-width: 100px;
      height: 50px;
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 1.1rem;
      background-color: hsl(212,88%,45%);

      :hover {
        cursor: pointer;
        background-color: #3f86d7;
      }

      :active {
        background-color: #6298d7;
      }
  }
`;

type searchBarProps = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onSearchClick: () => void;
}

export default function SearchBarContainer(props: searchBarProps) {

  function handleKeyPress(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      props.onSearchClick();
    }
  }

  return (
    <StyledSearchBarContainer>
        <div className="search-input">
          <FontAwesomeIcon
          icon={faSearch}
          style={{fontSize:"30", color: "hsl(212,88%,45%)" }}
          />
            <input type="text" onChange={props.onChange} onKeyDown={handleKeyPress}/>
        </div>
        <div className="search-button-group">
            <button className='btn-search' onClick={props.onSearchClick}>Search</button>
        </div>
    </StyledSearchBarContainer>
  );
};


