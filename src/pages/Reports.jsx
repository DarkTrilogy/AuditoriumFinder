import ReportTableOperations from "../features/reports/ReportTableOperations";
import ReportsTable from "../features/reports/ReportsTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import SearchBar from "../ui/SearchBar";

function Reports() {
  return (
    <>
      <SearchBar />
      <Row type="horizontal">
        <Heading as="h1">All reports</Heading>
        <ReportTableOperations />
      </Row>

      <ReportsTable />
    </>
  );
}

export default Reports;
