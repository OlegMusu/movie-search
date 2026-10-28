import styled from "styled-components";

export const FormMovie = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 55px;
  gap: 10px;
`;

export const MovieSearch = styled.input`
  width: 400px;
  padding: 15px 25px;
  font-size: 15px;
  border: 2px solid #d2cfda;
  border-radius: 50px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  color: black;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  &:focus {
    border-color: #d2cfda;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  body.dark-theme & {
    color: #e5e4e7;
    border-color: rgba(255, 255, 255, 0.15);
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }

    &:focus {
      border-color: rgba(78, 68, 49, 0.65);
      background-color: rgba(0, 0, 0, 0.25);
      box-shadow: 0 4px 20px rgba(78, 68, 49, 0.65);
    }
  }
`;

export const ButtonMovie = styled.button`
  padding: 15px 25px;
  font-size: 15px;
  cursor: pointer;
  background-color: black;
  color: #d2cfda;
  border: none;
  border-radius: 50px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
  
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.9;
    transform: translateX(-5px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
  }

  body.dark-theme & {
    color: black;
    background-color: #d2cfda;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
    
    &:hover {
      box-shadow: 0 4px 30px rgba(78, 68, 49, 0.65);
    }
  }
`;
