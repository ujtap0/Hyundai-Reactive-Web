import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 960px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

