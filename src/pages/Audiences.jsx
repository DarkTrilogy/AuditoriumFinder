import AudienceTable from "../features/audiences/AudienceTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import SearchBar from "../ui/SearchBar";

function Audiences(buildingId) {
  return (
    <>
      {/* <SearchBar /> */}
      <Row type="horizontal">
        <Heading as="h1">All audiences</Heading>
        <BookingTableOperations />
      </Row>

      <AudienceTable buildingId={buildingId} />
    </>
  );
}

export default Audiences;
