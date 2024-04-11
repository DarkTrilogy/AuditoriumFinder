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
import { useChangePassword } from "./useChangePassword";

function NewPasswordForm() {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const { signIn, isLoading: signinLoading } = useLogin();
  const { signup, isLoading: signupLoading } = useSignup();
  const { changePassword, isChanging } = useChangePassword();

  function handleSubmit(e) {
    e.preventDefault();
    const action = e.nativeEvent.submitter.innerText;
    switch (action) {
      case "Enter":
        if (!code) return;
        const request = {
          emailCode: code,
          // nickname,
          email: localStorage.getItem("email"),
          newPassword: password,
        };

        changePassword(request);
        // signIn({ email: localStorage.getItem("email"), password });

        // как получить
        // signup({ nickname, code });
        // нужно зарегистрировать пользователя с ранее введеным email и password
        // и отправить код на почту
        // после этого перейти на страницу ввода кода
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
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={signinLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Code">
        <Input
          type="text"
          id="code"
          autoComplete="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          disabled={signinLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="New password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={signinLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Repeat password">
        <Input
          type="password"
          id="Repeat password"
          autoComplete="current-password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          disabled={signinLoading}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button size="large" disabled={signinLoading}>
          {!signinLoading ? "Enter" : <SpinnerMini />}
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

export default NewPasswordForm;
