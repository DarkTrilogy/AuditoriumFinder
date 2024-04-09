import styled from "styled-components";

import { useMoveBack } from "../../hooks/useMoveBack";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import Audiences from "../../pages/Audiences";
import { useRequest } from "./useRequest";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function RequestDetail() {
  const { building, isLoading, error } = useRequest();
  const moveBack = useMoveBack();
  if (isLoading) return <Spinner />;

  console.log(building);
  const {
    id,
    address,
    city,
    firstLessonStart: start,
    lastLessonEnd: end,
  } = building;

  if (error) return <Empty resourceName="building" />;

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

  return (
    <>
      <HeadingGroup>
        <Heading as="h1">
          {city}, {address}
        </Heading>
        <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
      </HeadingGroup>
      {/* <AudienceTable building={building} /> */}
      <Audiences building={building} />
    </>
  );
}

export default RequestDetail;
