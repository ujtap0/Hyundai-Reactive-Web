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
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({primary}) => (primary ? '#4b59f7' : 'rgb(0, 44, 95)')};
  padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover{
    transition: all 0.3s ease-out;
    color: #fff;
    background: ${({primary}) => (primary ? '#0467fb' : '#4b59f7')};
  };

  @media screen and (max-width: 960px){
    width: 100%;
  }
`;