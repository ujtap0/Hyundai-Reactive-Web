import React from 'react';
import { InfoSection, InfoRow, InfoCol, TextContainer, ModelName, Introduction, ButtonContainer } from './Info.style';
import ImgSlider from '../ImgSlider/ImgSlider';
import { Container } from '../../globalStyles';
import { ionic5 } from './Data/data';
import { Button } from '../../globalStyles';

function Info() {
  return (
    <InfoSection>
      <Container>
        <InfoRow>
          <InfoCol>
            <ImgSlider imgUrl={ionic5.img} />
          </InfoCol>
          <InfoCol>
            <TextContainer>
              <ModelName>
                Ionic 5
              </ModelName>
              <Introduction>
              최초의 경험으로 가득찬 새로운 모빌리티 시대가 열립니다.
              무엇이든 가능한 세상, IONIQ 5를 경험하세요.
              </Introduction>
            </TextContainer>
            <ButtonContainer>
              <Button>자세히 알아보기</Button>
              <Button>시승 신청</Button>
            </ButtonContainer>
          </InfoCol>
        </InfoRow>
      </Container>
    </InfoSection>
  )
}

export default Info