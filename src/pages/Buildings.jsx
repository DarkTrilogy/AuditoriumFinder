import BookingTableOperations from "../features/bookings/BookingTableOperations";
import BuildingTable from "../features/buildings/BuildingTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import SearchBar from "../ui/SearchBar";

function Buildings() {
  return (
    <>
      <SearchBar />
      <Row type="horizontal">
        <Heading as="h1">All buildings</Heading>
        {/* <BookingTableOperations /> */}
      </Row>

      <BuildingTable />
    </>
  );
}

export default Buildings;
