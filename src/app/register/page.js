"use client";

import { useRouter } from "next/navigation";
import {
  RegisterContainer,
  RegisterForm,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
} from "./page.module";
import { useState } from "react";

export default function Register() {
  const [err, setErr] = useState("");

  const router = useRouter();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 &&
        router.push("/login?success=Account has been created");
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <Title>Register</Title>
        <FormGroup>
          <Label>Name:</Label>
          <Input type="text" id="name" name="name" required />
        </FormGroup>
        <FormGroup>
          <Label>Email:</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <Input type="password" id="password" name="password" required />
        </FormGroup>
        <Button>Submit</Button>
      </RegisterForm>
      {err && err}
    </RegisterContainer>
  );
}
