import { styled } from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  min-height: 90vh;
  gap: 10px;
`;

export const TableContainer = styled.div``;

export const BlockButton = styled.a`
  display: inline-block;
  padding: 0.6em 1.7em;
  border: 0.1em solid #191919;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    color: #000000;
    background-color: #ffffff;
  }
`;

export const CenteredSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;