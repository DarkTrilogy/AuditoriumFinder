import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";
import RegisterFofm from "../features/authentication/RegisterFofm";

const RegisterLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Register() {
  return (
    <RegisterLayout>
      <Logo />
      <Heading as="h4">Registration</Heading>
      <RegisterFofm />
    </RegisterLayout>
  );
}

export default Register;
