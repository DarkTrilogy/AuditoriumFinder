import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import RegisterForm from "../features/authentication/RegisterForm";
import NewPasswordForm from "../features/authentication/NewPasswordForm";

const RegisterLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function NewPassword() {
  return (
    <RegisterLayout>
      <Logo />
      <Heading as="h4">New Password</Heading>
      <NewPasswordForm />
    </RegisterLayout>
  );
}

export default NewPassword;
