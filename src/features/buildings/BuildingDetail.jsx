import styled from "styled-components";

import { useMoveBack } from "../../hooks/useMoveBack";
import Spinner from "../../ui/Spinner";
import { useLocation, useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout";
import Empty from "../../ui/Empty";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import AudienceTable from "../audiences/AudienceTable";
import Audiences from "../../pages/Audiences";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BuildingDetail({ state }) {
  const { building } = state;
  const {
    id,
    address,
    name,
    first_lesson_start: start,
    last_lesson_end: end,
  } = building;

  const moveBack = useMoveBack();

  const statusToTagName = {
    open: "green",
    closed: "red",
  };

  const currentHour = new Date().getHours();

  const startHour = start.split("-")[0];
  const endHour = end.split("-")[0];

  const status =
    currentHour >= Number(startHour) && currentHour < Number(endHour)
      ? "open"
      : "closed";
  console.log(
    "STARTHOUr, ENDHOUR",
    Number(startHour),
    Number(endHour),
    currentHour,
  );

  return (
    <>
      <HeadingGroup>
        <Heading as="h1">
          {name}, {address}
        </Heading>
        <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
      </HeadingGroup>
      <Audiences buildingId={id} />
    </>
  );
}

export default BuildingDetail;
