import styled from "styled-components";

import { HiArrowUpOnSquare } from "react-icons/hi2";
import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "../bookings/useDeleteBooking";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useNavigate } from "react-router-dom";

import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonText from "../../ui/ButtonText";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useReports } from "./useReports";
import ReportDataBox from "./ReportDataBox";
import ConfirmAdding from "../../ui/ConfirmAdding";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function ReportDetail() {
  const { reports, isLoading, count } = useReports();

  const moveBack = useMoveBack();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  if (!reports) return <Empty resourceName="report" />;

  const report = reports[0];
  const { reportId } = report;

  // const statusToTagName = {
  //   unconfirmed: "blue",
  //   "checked-in": "green",
  //   "checked-out": "silver",
  // };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Report #{reportId}</Heading>
          {/* <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag> */}
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <ReportDataBox report={report} />

      <ButtonGroup>
        <Modal>
          <Modal.Open opens="add">
            <Button icon={<HiArrowUpOnSquare />} disabled={false}>
              Check in
            </Button>
          </Modal.Open>
          <Modal.Window name="add">
            {/* <ConfirmAdding
              disabled={isAdding}
              onSilent={() => {
                addUserToAudience({
                  userId,
                  audience: audience,
                  silenceStatus: "silent",
                  // onSettled: () => {
                  //   localStorage.setItem("userAudienceId", audience.id);
                  //   navigate(-1);
                  // },
                });
              }}
              onNoise={() => {
                addUserToAudience({
                  userId,
                  audience: audience,
                  silenceStatus: "noise",
                  // onSettled: () => {
                  //   localStorage.setItem("userAudienceId", audience.id);
                  //   navigate(-1);
                  // },
                });
              }} */}
            {/* /> */}
          </Modal.Window>
        </Modal>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>

        {/* {userAudienceId === audience.id ? (
          <Button
            variation="secondary"
            onClick={() => {
              removeUserFromAudience(userId, audience.id);
            }}
          >
            Check out
          </Button>
        ) : null} */}
      </ButtonGroup>
    </>
  );
}

export default ReportDetail;
