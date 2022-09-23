import styled, {css} from "styled-components";
import {GrNext, GrPrevious} from 'react-icons/gr'

const ActiveSlide = css`
  opacity: 1;
  transition-duration: 1s;
  z-index: 3;
`

export const ImgContainer = styled.div`
  max-width: 600px;
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`

export const ImgWrapper = styled.div`
  width: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition-duration: 1s ease;
  ${({isCurrent}) => isCurrent && ActiveSlide }
`

export const Img = styled.img`
  max-width: 100%;
  height: 400px;
`

const btn = css`
  position: absolute;
  top: 50%;
  z-index: 10;
  font-size: 30px;
  cursor: pointer;
`

export const NextBtn = styled(GrNext)`
  ${btn}
  right: 5px;
`

export const PrevBtn = styled(GrPrevious)`
  ${btn}
  left: 5px;
`