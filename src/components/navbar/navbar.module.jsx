import { styled } from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 95%;
  margin-top: 20px;
  align-items: center;
`;


export const Logout = styled.a`
  margin-left: 20px;
  background-color: #222;
  border: 1px solid rgba(54, 54, 54, 0.6);
  font-weight: 600;
  position: relative;
  outline: none;
  border-radius: 4px;
  border-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 39px;
  width: 110px;
  opacity: 1;
  box-sizing: border-box;
  font-family: "Farfetch Basis", "Helvetica Neue", Arial, sans-serif;
  touch-action: manipulation;
  &:hover {
    opacity: 0.75;
  }
  &:focus {
    opacity: 0.75;
  }
`;