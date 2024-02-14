import React from "react";
import styled from "styled-components";

const BuyDescriptionWrapper = styled.div`
  /* background-color: gray; */
  width: 412px;
  height: 98px;
  gap: 0.5rem;

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
    font-size: 16px;
    font-weight: bold;
  }
  & div:last-child {
    font-size: 13px;
    font-weight: 200;
    color: darkgray;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: whitesmoke;
`;

function BuyDescription() {
  return (
    <div>
      <BuyDescriptionWrapper>
        <div>아래 정보를 입력해주세요.</div>
        <div>
          문제 발생 시에만 연락하며, 심부름 종료 시 파기합니다.오입력으로 인한
          책임은 본인에게 있습니다.
        </div>
      </BuyDescriptionWrapper>
      <Line />
    </div>
  );
}

export default BuyDescription;
