import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import FriendRow from "./FriendRow";
import { useFriends } from "./useFriends";

function FriendsTable() {
  const { friends, isLoading, count } = useFriends();

  if (isLoading) return <Spinner />;

  if (!friends.length) return <Empty resourceName={"friends"} />;

  return (
    <Menus>
      <Table columns="2fr 3fr 2fr 0.5fr">
        <Table.Header>
          <div>Friend</div>
          <div>Email</div>
          <div>Status</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={friends}
          render={(friend) => <FriendRow key={friend.userid} friend={friend} />}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default FriendsTable;
