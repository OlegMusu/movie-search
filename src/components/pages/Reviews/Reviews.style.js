import styled from "styled-components";

export const ReviewsTitle = styled.h2`
  font-size: 47px;
  font-weight: 600;
  text-align: center;
  color: black;

  body.dark-theme & {
    color: white;
  }
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 45px;
  list-style: none;
`;

export const ReviewItem = styled.li`
  backdrop-filter: blur(7.5px);
  background-color: rgba(200, 200, 200, 0.15);
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  body.dark-theme & {
    background-color: rgba(255, 255, 255, 0.03);
    border-left: 4px solid rgb(136, 112, 69);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const AuthorName = styled.h3`
  margin: 0 0 10px;
  font-size: 17px;
  font-weight: 600;
  color: #000000;

  body.dark-theme & {
    color: #ffffff;
  }
`;

export const ReviewContent = styled.p`
  font-size: 15px;
  opacity: 0.75;
  color: #000000;

  body.dark-theme & {
    color: #e5e4e7;
  }
`;

export const NoReviewsMessage = styled.p`
  opacity: 0.75;
  padding: 10px 0;
  color: #000000;

  body.dark-theme & {
    color: #e5e4e7;
  }
`;
