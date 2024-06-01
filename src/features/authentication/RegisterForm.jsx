import { useSignup } from "./useSignup";
import { useLogin } from "./useLogin";
import { useState } from "react";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import FormRowVertical from "../../ui/FormRowVertical";
import { useNavigate } from "react-router-dom";
import { emailOfCurrentUser } from "./LoginForm";

function RegisterForm() {
  const [nickname, setNickname] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { isLoading: loginLoading } = useLogin();
  const { signup, isLoading: signupLoading } = useSignup();

  function handleSubmit(e) {
    e.preventDefault();
    const action = e.nativeEvent.submitter.innerText;
    switch (action) {
      case "Enter":
        if (!nickname || !code) return;
        const request = {
          emailCode: code,
          nickname,
          email: emailOfCurrentUser,
          password: password,
        };
        signup(request);
        break;
      case "Go back to log in":
        navigate("/login");
        break;
      default:
        break;
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Nickname">
        <Input
          type="text"
          id="nickname"
          // This makes this form better for password managers
          autoComplete="username"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          disabled={loginLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Code">
        <Input
          type="text"
          id="code"
          autoComplete="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          disabled={loginLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Repeat password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loginLoading}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button size="large" disabled={loginLoading}>
          {!loginLoading ? "Enter" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
      <FormRowVertical type="register" className="text-teal-950">
        <Button size="register" variation="register" disabled={signupLoading}>
          {!signupLoading ? "Go back to log in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default RegisterForm;
