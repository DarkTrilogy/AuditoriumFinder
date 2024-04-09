import Empty from "../../ui/Empty";
import Heading from "../../ui/Heading";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import RequestRow from "./RequestRow";
import { useIncomingRequests } from "./useIncomingRequests";
import { useOutcomingRequests } from "./useOutcomingRequests";

function RequestTable() {
  const {
    data: incomingRequests,
    isLoading: isIncoming,
    count: incomingCount,
  } = useIncomingRequests();
  const {
    data: outcomingRequests,
    isLoading: isOutcoming,
    count: outcomingCount,
  } = useOutcomingRequests();

  if (isIncoming || isOutcoming) return <Spinner />;

  if (!incomingRequests.length && !outcomingRequests.length)
    return <Empty resourceName={"requests"} />;

  return (
    <>
      <Heading as="h2">Incoming Requests</Heading>
      <Menus>
        <Table columns="2.5fr 2fr 2fr 0.5fr">
          <Table.Header>
            <div>Student</div>
            <div>Agree</div>
            <div>Disagree</div>
            <div></div>
          </Table.Header>

          <Table.Body
            data={incomingRequests}
            render={(request) => (
              <RequestRow
                key={request.userId}
                request={request}
                type="incoming"
              />
            )}
          />
          <Table.Footer>
            <Pagination count={incomingCount} />
          </Table.Footer>
        </Table>
      </Menus>

      <Heading as="h2">Outgoing Requests</Heading>
      <Menus>
        <Table columns="2.5fr 0.5fr">
          <Table.Header>
            <div>Student</div>
            <div></div>
          </Table.Header>

          <Table.Body
            data={outcomingRequests}
            render={(request) => (
              <RequestRow
                key={request.userId}
                request={request}
                type="outcoming"
              />
            )}
          />
          <Table.Footer>
            <Pagination count={outcomingCount} />
          </Table.Footer>
        </Table>
      </Menus>
    </>
  );
}

export default RequestTable;
