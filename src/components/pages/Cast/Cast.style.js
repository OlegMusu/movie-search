import styled from "styled-components";

export const CastTitle = styled.h2`
  font-size: 47px;
  font-weight: 600;
  text-align: center;
  color: black;

  body.dark-theme & {
    color: white;
  }
`;

export const CastGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 25px;
  padding: 0;
  list-style: none;
`;

export const CastCard = styled.li`
  backdrop-filter: blur(7.5px);
  background-color: rgba(200, 200, 200, 0.15);
  padding: 15px;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  }

  body.dark-theme & {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export const CastPhoto = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const CastName = styled.h3`
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 5px;
  color: #000000;

  body.dark-theme & {
    color: #ffffff;
  }
`;

export const CharacterName = styled.p`
  font-size: 13px;
  opacity: 0.75;
  color: #000000;

  body.dark-theme & {
    color: #e5e4e7;
  }
`;

export const NoInfoMessage = styled.p`
  opacity: 0.75;
  padding: 20px 0;
  color: #000000;

  body.dark-theme & {
    color: #e5e4e7;
  }
`;
