import { useNavigate } from "react-router-dom";
import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import BuildingRow from "./BuildingRow";
import { useBuildings } from "./useBuildings";
import Spinner from "../../ui/Spinner";

function BuildingTable() {
  const { buildings, count, isLoading, error } = useBuildings();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  if (error) return <Empty resourceName="buildings" />;

  return (
    <Menus>
      <Table columns="30% 30% 30% 1%">
        <Table.Header>
          <div>Address</div>
          <div>Start</div>
          <div>End</div>
        </Table.Header>
        {buildings !== undefined && (
          <Table.Body
            data={buildings}
            render={(building) => (
              <BuildingRow
                key={building.id}
                building={building}
                onClick={() => {
                  navigate(`/buildings/${building.id}`);
                }}
              />
            )}
          />
        )}
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BuildingTable;
