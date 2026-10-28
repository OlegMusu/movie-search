import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigatorNav = styled.nav`
  position: fixed;
  width: 1126px;
  box-sizing: border-box;
  display: flex;
  padding: 20px 30px;
  z-index: 100;
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  top: -120px;
  opacity: 0;
  transition:
    top 1s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.3s ease,
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  body.dark-theme & {
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 30px rgba(78, 68, 49, 0.35);
  }

  ${(props) =>
    props.$showFloating &&
    `
    top: 15px;
    opacity: 1;
    pointer-events: auto;
  `}
`;

export const NavigatorLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  margin-right: 25px;
  color: black;
  transition:
    color 0.3s ease,
    opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  body.dark-theme & {
    color: #d2cfda;
  }
`;
