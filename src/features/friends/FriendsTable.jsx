import { useBookings } from "../bookings/useBookings";
import UserRow from "../users/UserRow";
import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import FriendRow from "./FriendRow";
import { useFriends } from "./useFriends";

function FriendsTable() {
  // const { bookings, isLoading, count } = useBookings();

  // if (isLoading) return <Spinner />;

  // if (!bookings.length) return <Empty resourceName={"bookings"} />;

  const { friends, isLoading, count } = useFriends(1);

  if (isLoading) return <Spinner />;

  if (!friends.length) return <Empty resourceName={"friends"} />;

  return (
    <Menus>
      <Table columns="2.5fr 2fr 0.5fr">
        <Table.Header>
          <div>Guest</div>
          <div>Status</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={friends}
          render={(friend) => <FriendRow key={friend.userId} friend={friend} />}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default FriendsTable;
