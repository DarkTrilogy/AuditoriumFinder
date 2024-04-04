import { useNavigate } from "react-router-dom";
import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import BuildingRow from "./BuildingRow";
import { useBuildings } from "./useBuildings";

function BuildingTable() {
  const data = useBuildings();
  const navigate = useNavigate();
  const { buildings, count } = data;

  //   if (isLoading) return <Spinner />;

  if (!buildings.length) return <Empty resourceName={"buildings"} />;

  function showBuilding(building) {
    navigate(`/buildings/${building.id}`, { state: { building } });
  }

  return (
    <Menus>
      <Table columns="30% 30% 30% 1%">
        <Table.Header>
          <div>Address</div>
          <div>Start</div>
          <div>End</div>
        </Table.Header>

        <Table.Body
          data={buildings}
          render={(building) => (
            <BuildingRow
              key={building.id}
              building={building}
              onClick={() => {
                showBuilding(building);
              }}
            />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BuildingTable;
