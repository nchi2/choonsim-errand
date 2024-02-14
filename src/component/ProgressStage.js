import React from "react";
import styled from "styled-components";

const ProgressWrapper = styled.div`
  /* background-color: gray; */
  width: 412px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressBar = styled.div`
  width: 264px;
  height: 12px;
  background-image: url("/Progressbar.png");
  background-size: cover;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: whitesmoke;
`;

function ProgressStage() {
  return (
    <div>
      <ProgressWrapper>
        <ProgressBar />
      </ProgressWrapper>
      <Line />
    </div>
  );
}

export default ProgressStage;
