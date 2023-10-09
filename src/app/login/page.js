"use client";

import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import {
  LoginContainer,
  LoginForm,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
  RegisterButton,
  ButtonsContainer,
  CenteredSpinnerContainer,
  Spinner
} from "./page.module";

export default function page() {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return (
      <CenteredSpinnerContainer>
        <Spinner />
      </CenteredSpinnerContainer>
    );
  }

  session.status === "authenticated" && router.push("/");

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;

    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <Title>Login</Title>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <Input type="password" id="password" name="password" required />
        </FormGroup>
        <ButtonsContainer>
          <Button type="submit">Login</Button>
          <RegisterButton type="text" onClick={() => router.push("/register")}>
            - Create a new account -
          </RegisterButton>
        </ButtonsContainer>
      </LoginForm>
    </LoginContainer>
  );
}
