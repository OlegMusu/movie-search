import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const DetailsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  gap: 75px;
`;

export const PicturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 450px;
  flex-shrink: 0;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: black;
  transition: all 0.2s ease;

  body.dark-theme & {
    color: #d2cfda;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const DetailPoster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 30px;
`;

export const InfoContent = styled.div`
  p {
    margin: 0 0 20px 0;
    color: black;

    body.dark-theme & {
      color: #a7a4ad;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 10px;
  }

  li {
    font-weight: 500;
    color: #000000af;

    body.dark-theme & {
      color: #a7a4ad;
    }
  }
`;

export const InfoTitle = styled.h1`
  margin: 0 0 40px 0;
  font-weight: 700;
  color: black;

  body.dark-theme & {
    color: white;
  }
`;

export const InfoSubtitle = styled.h2`
  margin: 0 0 15px 0;

  body.dark-theme & {
    color: #d2cfda;
  }
`;

export const AdditionalInfoWrapper = styled.div`
  padding: 30px;
  margin-top: 20px;

  h2 {
    margin: 0 0 30px;
    color: black;

    body.dark-theme & {
      color: white;
    }
  }
`;

export const InfoLinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
`;

export const InfoNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  color: #000000af;
  padding: 7px 15px;
  border-radius: 10px;
  background-color: rgba(200, 200, 200, 0.2);
  border: 2px solid transparent; 
  transition: all 0.3s ease;

  &:hover {
    border: 2px solid #d2cfda;
    background-color: rgba(0, 0, 0, 0.1);
    color: #000000;
  }

  &.active {
    border: 2px solid #d2cfda;
    background-color: rgba(200, 200, 200, 0.4);
    color: #000000;
  }

  body.dark-theme & {
    color: #a7a4ad;
    background-color: rgba(255, 255, 255, 0.05);
    border: 2px solid transparent;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border: 2px solid rgb(136, 112, 69);
      color: #ffffff;
    }

    &.active {
      background-color: rgba(255, 255, 255, 0.1);
      border: 2px solid rgb(136, 112, 69);
      color: #ffffff;
    }
  }
`;


export const MainInfoWrapper = styled.div``;
export const GenreList = styled.ul``;
