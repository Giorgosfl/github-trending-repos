import styled, { keyframes } from "styled-components";

const LoaderKeyframes1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const LoaderKeyframes2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

const LoaderKeyframes3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const LoaderStyled = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #cbe4de;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  div:nth-child(1) {
    left: 8px;
    animation: ${LoaderKeyframes1} 0.6s infinite;
  }

  div:nth-child(2) {
    left: 8px;
    animation: ${LoaderKeyframes2} 0.6s infinite;
  }

  div:nth-child(3) {
    left: 32px;
    animation: ${LoaderKeyframes2} 0.6s infinite;
  }

  div:nth-child(4) {
    left: 56px;
    animation: ${LoaderKeyframes3} 0.6s infinite;
  }
`;

export const LoaderTextStyled = styled.div`
  font-size: 2rem;
  color: #cbe4de;
`;
export const LoaderContainerStyled = styled.div`
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
