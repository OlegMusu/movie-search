import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 25px;
  padding: 30px;
`;

export const MovieCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieCardLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: transform 0.5s;

  &:hover {
    transform: translateY(-7px);
  }
`;

export const PosterWrapper = styled.div`
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.5s ease;

  ${MovieCardLink}:hover & {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);

    body.dark-theme & {
      box-shadow: 0 4px 30px rgba(78, 68, 49, 0.65);
    }
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MovieTitle = styled.span`
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3;
  text-align: center;
  color: #000000;

  body.dark-theme & {
    color: #d2cfda;
  }
`;
