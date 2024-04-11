import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import { useBookings } from "../bookings/useBookings";
import UserRow from "../users/UserRow";
import ReportsRow from "./ReportsRow";
import { useReports } from "./useReports";

function ReportsTable() {
  const { reports, isLoading, count } = useReports();
  console.log("REPORTS123", reports);

  // const { bookings, isLoading, count } = useBookings();

  if (isLoading) return <Spinner />;

  // if (!bookings.length) return <Empty resourceName={"bookings"} />;

  return (
    <Menus>
      <Table columns="2fr 4fr 4fr 4fr 4fr 0.5fr">
        <Table.Header>
          <div>ReportID</div>
          <div>AccusorID</div>
          <div>StudentID</div>
          <div>Report message</div>
          <div>Date</div>
          {/* <div>Status</div> */}
          <div></div>
        </Table.Header>

        {reports !== undefined && (
          <Table.Body
            data={reports}
            render={(report) => <ReportsRow key={report.id} report={report} />}
          />
        )}
        {/* <Table.Footer>
          <Pagination count={count} />
        </Table.Footer> */}
      </Table>
    </Menus>
  );
}

export default ReportsTable;
