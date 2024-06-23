import styled, { keyframes } from "styled-components";

const hideIcon = keyframes`
  from {
    top: -20%;
  }
  to {
    top: 0%;
  }
`;
const hideIconEye = keyframes`
  from {
    top: -20%;
  }
  to {
    top: 25%;
  }
`;
export const ListProductRowContainer = styled.div`
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 5px 10px 8px 10px rgba(0, 0, 0, 0.2);
  }
`;
export const ListProductRow = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

export const IconTopRowLeft = styled.div`
  position: absolute;
  display: none;
  top: -50px;
  left: 0;
  width: 48px;
  height: 48px;
  cursor: pointer;
  &:hover {
    color: blue;
  }

  ${ListProductRow}: hover & {
    animation: ${hideIcon} 0.25s ease-in-out;
    top: 0;
    left: 0;
    display: inline;
  }
`;
export const IconTopRowRight = styled.div`
  position: absolute;
  display: none;
  top: -50px;
  right: 0;
  width: 48px;
  height: 48px;
  cursor: pointer;
  &:hover {
    color: blue;
  }

  ${ListProductRow}: hover & {
    animation: ${hideIcon} 0.25s ease-in-out;
    top: 0;
    right: 0;
    display: inline;
  }
`;
export const IconEyeCenter = styled.div`
  position: absolute;
  display: none;
  top: -50px;
  right: 35%;
  width: 48px;
  height: 48px;
  cursor: pointer;
  &:hover {
    color: blue;
  }

  ${ListProductRow}: hover & {
    animation: ${hideIconEye} 0.25s ease-in-out;
    top: 25%;
    right: 35%;
    display: inline;
  }
`;
export const ImgProductSaleRow = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  object-position: center;
  ${ListProductRow}:hover & {
    filter: blur(2px);
  }
`;
export const hideButtonProductRow = keyframes`
from {
    bottom: -20%;
  }
  to {
    bottom: -5px;
  }

`;
export const ButtonProductSaleRow = styled.button`
  background-color: inherit;
  position: absolute;
  visibility: hidden;
  bottom: -50px;
  border: none;
  &:hover {
    color: blue;
  }

  ${ListProductRow}:hover & {
    bottom: -5px;
    animation: ${hideButtonProductRow} 0.25s ease-in-out;
    visibility: visible;
  }
`;
export const ImgProductSaleColumn = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  object-positon: center;
`;
export const ListProductColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  position: relative;
`;
const fadeIn = keyframes`
from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const IconEyeColumn = styled.div`
  display: none;
  position: absolute;
  top: 35%;
  right: 40%;
  cursor: pointer;
  &:hover {
    color: blue;
  }

  ${ListProductColumn}:hover & {
    display: inline-block;
    animation: ${fadeIn} 0.6s ease-in-out;
  }
`;
export const IconBottomColumnRight = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  display: none;
  cursor: pointer;
  &:hover {
    color: blue;
  }

  ${ListProductColumn}:hover & {
    display: inline-block;
    animation: ${fadeIn} 0.6s ease-in-out;
  }
`;
export const IconTopColumnRight = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  display: none;
  cursor: pointer;
  &:hover {
    color: blue;
  }

  ${ListProductColumn}:hover & {
    display: inline-block;
    animation: ${fadeIn} 0.6s ease-in-out;
  }
`;
export const ListProductColumnContainer = styled.div`
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 5px 10px 8px 10px rgba(0, 0, 0, 0.2);
  }
`;
export const ButtonNewArrivalProduct = styled.button`
  margin: 2px;
  padding: 5px;
  border-radius: 5px;
  background-color: #ffffcc;
  color: black;
  font-weight: bold;
  &:hover {
    background-color: #ffcc99;
  }
`;
