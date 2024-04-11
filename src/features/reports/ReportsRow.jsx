import styled from "styled-components";
import { HiEye, HiTrash } from "react-icons/hi2";

import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";

import { useNavigate } from "react-router-dom";
import { useDeclineReport } from "./useDeclineReport";
import ConfirmReportOperation from "../../ui/ConfirmDecline";
import { FaBan } from "react-icons/fa";
import { useBanStudent } from "./useBanStudent";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

function ReportsRow({
  report: {
    reportDescription,
    reportFromId,
    reportId,
    reportTimestamp,
    reportedUserId,
    reportedUserProfile,
  },
}) {
  const navigate = useNavigate();
  const { isDeclining, declineStudentReport } = useDeclineReport();
  const { isBanning, banStudent } = useBanStudent();
  const userid = localStorage.getItem("userId");

  console.log("reportedUserProfile", reportDescription);
  // const statusToTagName = {
  //   unconfirmed: "blue",
  //   "checked-in": "green",
  //   "checked-out": "silver",
  // };

  // 2024-04-11T12:29:53.193534
  const date = reportTimestamp.split("T")[0];
  const time = reportTimestamp.split("T")[1].slice(0, 8);

  return (
    <Table.Row>
      <Cabin>{reportId}</Cabin>
      <Cabin>{reportFromId}</Cabin>

      <Cabin>{reportedUserId}</Cabin>

      <Cabin>
        {reportDescription.slice(0, 10)}
        {reportDescription.length > 10 ? "..." : ""}
      </Cabin>

      <Stacked>
        <span className="uppercase">{date}</span>
        <span className="uppercase">{time}</span>
        {/* <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span> */}
      </Stacked>

      {/* <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag> */}

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={reportId} />
          <Menus.List id={reportId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/reports/${reportId}`)}
            >
              See details
            </Menus.Button>

            {/* {status === "unconfirmed" && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${reportId}`)}
              >
                Check in
              </Menus.Button>
            )}

            {status === "checked-in" && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                onClick={() => checkout(reportId)}
                disabled={isCheckingOut}
              >
                Check out
              </Menus.Button>
            )} */}

            {/* <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete report</Menus.Button>
            </Modal.Open> */}
            <Modal.Open opens="decline">
              <Menus.Button icon={<HiTrash />}>Decline report</Menus.Button>
            </Modal.Open>

            <Modal.Open opens="ban">
              <Menus.Button icon={<FaBan />}>Ban student</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        {/* <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="repost"
            disabled={isDeclining}
            onConfirm={() => deleteBooking(reportId)}
          />
        </Modal.Window> */}

        <Modal.Window name="decline">
          <ConfirmReportOperation
            resourceName="repost"
            disabled={isDeclining}
            onConfirm={() => declineStudentReport({ userid, id: reportId })}
            message={`Are you sure you want to decline this repost? This action cannot
            be undone.`}
            action="Decline"
          />
        </Modal.Window>

        <Modal.Window name="ban">
          <ConfirmReportOperation
            resourceName="Studend"
            disabled={isDeclining}
            onConfirm={() =>
              banStudent({
                userid,
                banRequest: {
                  userid: reportedUserId,
                  bannedUntil: "2024-04-12 00:00:00",
                  reason: "something bad",
                },
              })
            }
            message={`Are you sure you want to ban this student? This action cannot
            be undone.`}
            action="Ban"
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default ReportsRow;
