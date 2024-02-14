import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./component/Header";
import ProgressStage from "./component/ProgressStage";
import BuyTitle from "./component/BuyTitle";
import BuyDescription from "./component/BuyDescription";
import FormComponent from "./component/FormComponent";

// 전역으로 적용할 스타일을 설정합니다.
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'pretendard', 'roboto'; /* 기본 폰트를 Roboto로 설정합니다. */
  }
`;
const AppBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppWrapper = styled.div`
  width: 412px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;

function App() {
  return (
    <AppBackground>
      <AppWrapper>
        <GlobalStyle /> {/* 전역으로 설정한 스타일을 적용합니다. */}
        <Header />
        <ProgressStage />
        <BuyTitle />
        <BuyDescription />
        <FormComponent />
      </AppWrapper>
    </AppBackground>
  );
}

export default App;
