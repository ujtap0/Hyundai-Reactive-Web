import styled from "styled-components";

export const InfoSection = styled.div`
  padding: 110px 0;
  @media screen and (max-width: 960px) {
    padding: 0;
  }
`

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: block;
    position: relative;
    top: 0;
    left: 0;
    z-index: 3;
    background: url('https://www.hyundai.com/static/images/model/ioniq5/21lc/ioniq5_gallery_ioniq-exterior1.jpg') 50% no-repeat;
    background-size: cover;
    height: 90vh;
    width: 100%;
  }
`;

export const InfoCol = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
`

export const TextContainer = styled.div`
  margin-left: 48px;
  max-width: 430px;
  @media screen and (max-width: 960px) {
    position: absolute;
    z-index: 10;
  }
`

export const ModelName = styled.h2`
  margin-bottom: 32px;
`

export const Introduction = styled.p`
  margin-bottom: 72px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 430px;
  margin-left: 48px;

  button:first-child{
    margin-right: 12px;
  }
`