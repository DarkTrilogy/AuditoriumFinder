import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import { useProfile } from "../features/authentication/useProfile";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Spinner from "../ui/Spinner";

function Account() {
  const { user, isLoading } = useProfile();
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm
          nickname={user.nickname}
          currentTags={user.tags}
          telegramHandle={user.telegramHandle}
          emailVisibility={user.emailVisibility}
          telegramVisibility={user.telegramVisibility}
        />
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
