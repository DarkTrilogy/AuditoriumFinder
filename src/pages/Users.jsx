import UsersTable from "../features/users/UsersTable";
import Heading from "../ui/Heading";
import SearchBar from "../ui/SearchBar";

function Users() {
  return (
    <>
      <SearchBar />
      <Heading as="h1">List of all users</Heading>
      {/* <SignupForm /> */}
      <UsersTable />
    </>
  );
}

export default Users;
