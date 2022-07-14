import React from 'react';
import styled from 'styled-components';

const StyledSearchBarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2b3d66;
  border-radius: 10px;
  padding: 5px;

  .btn-search {
      min-width: 100px;
      height: 50px;
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 1.1rem;
      background-color: hsl(212,88%,45%);
  }
`;

export default function SearchBarContainer() {
  return (
    <StyledSearchBarContainer>
        <div className="search-input">
            <input type="text" />
        </div>
        <div className="search-button-group">
            <button className='btn-search'>Search</button>
        </div>
    </StyledSearchBarContainer>
  );
};


