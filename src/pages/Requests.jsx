import RequestTable from "../features/requests/RequestTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import SearchBar from "../ui/SearchBar";

function Requests() {
  return (
    <>
      <SearchBar />
      <Row type="horizontal">
        <Heading as="h1">All requests</Heading>
        {/* <BookingTableOperations /> */}
      </Row>

      <RequestTable />
    </>
  );
}

export default Requests;
