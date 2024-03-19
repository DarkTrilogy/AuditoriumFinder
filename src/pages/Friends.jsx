import FriendsTable from "../features/friends/FriendsTable";
import Heading from "../ui/Heading";
import SearchBar from "../ui/SearchBar";

function Friends() {
  return (
    <>
      <SearchBar />
      <Heading as="h1">Your friends</Heading>
      {/* <SignupForm /> */}
      <FriendsTable />
    </>
  );
}

export default Friends;
