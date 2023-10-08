import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, grey, black, grey);
  flex-direction: column;
`;
export const RegisterForm = styled.form`
  background-color: #000000;
  padding: 30px;
  width: 500px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  background: #191919;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 265px;
`;
export const FormGroup = styled.div`
  margin-bottom: 15px;
`;
export const Label = styled.label`
  display: block;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  /* border-radius: 5px; */
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  font-family: lato, sans-serif;
  font-weight: bold;
  font-size: 1em;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: #ffffff;
  background-color: #191919;
  display: inline-block;
  padding: 10px 40px;
  position: relative;
  border: 2px solid #ffffff;
  cursor: pointer;
  &:hover {
    color: #000000;
    background-color: #ffffff;
  }
`;

export const RegisterButton = styled.button`
  display: inline-block;
  padding: 0.6em 1.7em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #000000;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background-color: #000000;
  }
`;
