import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import BookingRow from "./BookingRow";
import { useEffect, useState } from "react";

function BookingTable() {
  const [loading, setLoading] = useState(true);
  let {
    data2: bookings,
    isLoading,
    count,
  } = useBookings(localStorage.getItem("lastClickedBuildingId"));

  useEffect(() => {
    if (!isLoading) {
      setLoading(false);
    }
  }, [isLoading]);

  if (loading) return <Spinner />;

  if (!bookings || bookings.length === 0) {
    console.log("asdkfl;asdf");
    return <Empty resourceName={"bookings"} />;
  }

  return (
    <Menus>
      <Table columns="2fr 2fr 2fr 2fr 2fr">
        <Table.Header>
          <div>Audience</div>
          <div>Building</div>
          <div>Noise students</div>
          <div>Quite students</div>
          <div>Type</div>
          <div></div>
        </Table.Header>

        {bookings && (
          <Table.Body2
            data={bookings}
            render={(booking) => {
              console.log("asdfasdf", booking);
              return <BookingRow key={booking.userid} booking={booking} />;
            }}
          />
        )}
        {/* <Table.Footer>
          <Pagination count={count} />
        </Table.Footer> */}
      </Table>
    </Menus>
  );
}

export default BookingTable;
