import SignupForm from "../features/authentication/SignupForm";
import UsersTable from "../features/users/UsersTable";
import Heading from "../ui/Heading";

function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      {/* <SignupForm /> */}
      <UsersTable />
    </>
  );
}

export default NewUsers;
