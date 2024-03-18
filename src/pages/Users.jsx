import SignupForm from "../features/authentication/SignupForm";
import UsersTable from "../features/users/UsersTable";
import Heading from "../ui/Heading";
import SearchBar from "../ui/SearchBar";

function NewUsers() {
  return (
    <>
      <SearchBar />
      <Heading as="h1">Create a new user</Heading>
      {/* <SignupForm /> */}
      <UsersTable />
    </>
  );
}

export default NewUsers;
