import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import { useBookings } from "../bookings/useBookings";
import UserRow from "./UserRow";

function UsersTable() {
  const { bookings, isLoading, count } = useBookings();

  if (isLoading) return <Spinner />;

  if (!bookings.length) return <Empty resourceName={"bookings"} />;

  return (
    <Menus>
      <Table columns="2fr 2.5fr 2fr 0.5fr">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Status</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => <UserRow key={booking.id} booking={booking} />}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default UsersTable;
