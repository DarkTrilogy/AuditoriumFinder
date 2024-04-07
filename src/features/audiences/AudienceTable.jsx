import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import AudienceRow from "./AudienceRow";
import { useAudiences } from "./useAudiences";
import { useNavigate } from "react-router-dom";

function AudienceTable({ building }) {
  const navigate = useNavigate();
  const {
    data: { auditoriums, currentBuilding },
    isLoading,
    error,
    count,
  } = useAudiences(building);

  if (isLoading) return <Spinner />;

  if (error) return <Empty resourceName={"audiences"} />;

  // const currentBuilding = data.building;
  const audiences = auditoriums;

  return (
    <Menus>
      <Table columns="22.5% 22.5% 22.5% 22.5% 1%">
        <Table.Header>
          <div>Type</div>
          <div>Audience</div>
          <div>Silent</div>
          <div>Noise</div>
          <div></div>
        </Table.Header>

        {audiences !== undefined && (
          <Table.Body
            data={audiences}
            render={(audience) => (
              <AudienceRow
                key={audience.id}
                audience={audience}
                onClick={() => {
                  navigate(`/buildings/${building.id}/audience/${audience.id}`);
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

export default AudienceTable;
