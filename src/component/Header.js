import React from "react";
import styled from "styled-components";

const StyledLogoWrapper = styled.div`
  /* background-color: pink; */
  width: 412px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledLogoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.6rem;
  padding-left: 10px;
  cursor: pointer;

  & div:first-child {
    width: 25px;
    height: 25px;
    background-image: url("/Choonsim.png");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & div:last-child {
    font-size: 16px;
    font-weight: bold;
    color: #007aff;
  }
`;

// const StyledImageContainer = styled.div`
//   width: 60px;
//   height: 60px;
//   background-image: url("/Choonsim.png");
//   background-size: cover;
// `;

function Header() {
  return (
    <div>
      <StyledLogoWrapper>
        <StyledLogoBox>
          <div />
          <div>Choonsim Sidabari</div>
        </StyledLogoBox>
      </StyledLogoWrapper>
    </div>
  );
}

export default Header;
