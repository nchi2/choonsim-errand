import React from "react";
import styled from "styled-components";

const BuyTitleWrapper = styled.div`
  width: 412px;
  height: 120px;
  gap: 0.8rem;

  display: flex;
  justify-content: center;
  flex-direction: column;

  & div {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
  }
  & div:first-child {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
  & div:last-child {
    font-size: 13px;
    font-weight: 200;
    text-align: center;
    color: darkgray;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: darkgray;
`;

function BuyTitle() {
  return (
    <div>
      <BuyTitleWrapper>
        <div>구매 심부름 요청</div>
        <div>
          어서오세요. BTCMobick 구매대행 서비스, 춘심 심부름센터입니다.-
          호가창이 있고 대중에게 익명이 보장되는 방식으로 진행됩니다.
        </div>
      </BuyTitleWrapper>
      <Line />
    </div>
  );
}

export default BuyTitle;
