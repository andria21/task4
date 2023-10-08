import styled from "styled-components";

export const Td = styled.td`
  padding: 20px;
  border: 1px solid #191919;
`;
export const Th = styled.th`
  padding: 20px;
  border: 1px solid #191919;
`;

export const Tr = styled.tr`
  border: 1px solid #191919;
  border-collapse: collapse;
  border-radius: 10px;
`;

export const TableContainer = styled.table`
  border: 1px solid #191919;
  border-collapse: collapse;
  border-radius: 10px;
  margin-top: 10px;
`;

///

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

export const TableDIv = styled.div`

`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
`;
