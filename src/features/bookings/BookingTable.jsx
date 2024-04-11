import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import BookingRow from "./BookingRow";
import Pagination from "../../ui/Pagination";
import FriendRow from "../friends/FriendRow";
import { useFriends } from "../friends/useFriends";

function BookingTable() {
  const { friends, isLoading, count } = useFriends();

  if (isLoading) return <Spinner />;

  if (!friends.length) return <Empty resourceName={"friends"} />;

  return (
    <Menus>
      <Table columns="2fr 2fr 2fr 2fr 2fr 0.5fr">
        <Table.Header>
          <div>Audience</div>
          <div>Building</div>
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

export default BookingTable;
