import { Field } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Advertisement = styled.div`
  width: fit-content;
  text-align: center;
`;
export const AdsDetail = styled.a`
  position: relative;
  overflow: hidden;
  display: block;
`;

export const AdsImage = styled.img`
  vertical-align: middle;
`;
export const AdsInfo = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 24px;
  text-align: center;
  z-index: 1;
  color: white;
`;

export const AdsInfoBanner = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
  text-align: right;
  z-index: 1;
  color: black;
`;
export const AdsButton = styled(Link)`
  text-decoration: none;
  color: black;
  border: 1px solid black;
  background-color: white;
  border-radius: 10px;
  padding: 8px;
  display: block;
  width: fit-content;
  text-align: center;
  margin: auto;
`;
export const ImgCard = styled.img`
  width: 90px;
`;
export const ImgCardDetail = styled.div``;
export const PrimaryButton = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  padding: 8px 15px 6px;
  font-size: 12px;
  background-color: #404245;
  margin: 10px 0 15px;
  color: #fff;
  border-radius: 8px;
  font-weight: 400;
  text-align: center;
`;

export const Carousel = styled.div`
  color: black;
  width: 900px;
  border-radius: 5px;
  border: 1px solid #ebebeb;
  margin: 20px;
  overflow: hidden;
`;

export const CarouselHeading = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fafafa;
  border-radius: 5px 5px 0 0;
`;

export const CarouselSmallButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 30px;
`;

export const CarouselLargeButtonContainer = styled.div`
  display: flex;
`;

export const CarouselSideButtonContainer = styled.div``;

export const CarouselButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ebebeb;
  border-radius: 5px;
`;

export const CarouselItemBox = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  overflow: auto;
`;

export const CarouselItem = styled.div`
  padding: 10px;
  min-width: 25%;
  display: flex;
  flex-direction: column;
`;

export const CarouselItemImage = styled.img`
  object-fit: cover;
  display: flex;
`;

export const CarouselItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 5px 5px;
  text-align: center;
  gap: 5px;
`;

export const CarouselItemName = styled.a`
  text-decoration: none;
  font-size: 0.8rem;
  color: black;

  &:hover {
    color: #6284ce;
  }
`;

export const CarouselRedictButton = styled(Link)`
  font-size: 0.8rem;
  text-decoration: none;
  letter-spacing: 0.05rem;
  padding: 0 30px;
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 1px;
    height: 60%;
    margin: auto 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: black;
  }
`;

export const CarouselHeadingText = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.05rem;
`;

export const CarouselItemDate = styled.p`
  font-size: 0.8rem;
  color: #6284ce;
`;

export const CategoriesCardList = styled.ul``;

export const CategoriesCardItem = styled.li`
  display: flex;
`;

export const UserInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px 12px;
  margin: 10px 0;
  border-radius: 5px;
  color: #888;
  background-color: #fff;
  border: 1px solid #ddd;
`  
export const BackgroundLogin = styled.div`
  background-color: #76885B;
  background: linear-gradient(to right, #e2e2e2, #76885B)
`
export const LoginForm = styled.div`
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
`
export const FormInput = styled(Field)`
  background-color: #eee;
  border: none;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 8px;
  width: 100%;
  outline: none;
`
export const FormButton = styled.button`
  background-color: #76885B;
  color: #fff;
  font-size: 12px;
  padding: 10px 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;
`
export const FormIcon = styled.a`
  border: 1px solid #ccc;
  border-radius: 20%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  text-decoration: none;
  color: #76885B;
  margin: 0 10px;
`
export const FormText = styled.a `
  color: #333;
  font-size: 13px;
  text-decoration: none;
`
export const NavBg = styled.div`
  background-color: #76885B
`