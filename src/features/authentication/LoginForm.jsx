import { useState } from "react";

import { useLogin } from "./useLogin";
import { useSignup } from "./useSignup";
import { useEmailVerification } from "./useEmailVerification";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";

export let emailOfCurrentUser;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, isLoading: signinLoading } = useLogin();
  const { isLoading: signupLoading } = useSignup();
  const { confirmCode } = useEmailVerification();

  function handleSubmit(e) {
    e.preventDefault();
    const action = e.nativeEvent.submitter.innerText;
    if (action === "Log in") {
      if (!email || !password) return;
      emailOfCurrentUser = email;
      console.log("CURRENT_EMAIL", emailOfCurrentUser);
      signIn(
        { email, password },
        {
          onSettled: () => {
            setEmail("");
            setPassword("");
          },
        },
      );
    } else if (action === "Register") {
      if (!email || !password) return;
      emailOfCurrentUser = email;
      console.log("EMAIL", email);
      confirmCode({ email, type: "register" });
    } else if (action === "Don't remember password?") {
      if (!email) return;
      confirmCode({ email, type: "password" });
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
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={signinLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={signinLoading}>
          {!signinLoading ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
      <FormRowVertical type="register" className="text-teal-950">
        <Button size="register" variation="register" disabled={signupLoading}>
          {!signupLoading ? "Register" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
      <FormRowVertical type="register" className="text-teal-950">
        <Button
          size="register"
          variation="resetPassword"
          disabled={signupLoading}
        >
          {!signupLoading ? "Don't remember password?" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
