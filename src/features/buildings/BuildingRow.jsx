import styled from "styled-components";
import { HiEye, HiOutlineEnvelope } from "react-icons/hi2";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";

import { useNavigate } from "react-router-dom";

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
    font-size: 1.2rem;
  }
`;

function BuildingRow({
  building: {
    id,
    name,
    address,
    first_lesson_start: start,
    last_lesson_end: end,
  },
  onClick,
}) {
  const navigate = useNavigate();

  return (
    <Table.Row onClick={onClick}>
      <Stacked>
        <span>{address}</span>
        <span>{name}</span>
      </Stacked>

      {/* <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked> */}

      <Tag type="green">
        <span>{start}</span>
      </Tag>

      <Tag type="red">
        <span>{end}</span>
      </Tag>
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={id} />
          <Menus.List id={id}>
            <Menus.Button
              icon={<HiEye />}
              // onClick={() => navigate(`/buildings/${id}`, { state: { id } })}
            >
              See details
            </Menus.Button>

            {/* {status === "unconfirmed" && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${userId}`)}
              >
                Check in
              </Menus.Button>
            )}

            {status === "checked-in" && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                onClick={() => checkout(userId)}
                disabled={isCheckingOut}
              >
                Check out
              </Menus.Button>
            )} */}
          </Menus.List>
        </Menus.Menu>
      </Modal>
    </Table.Row>
  );
}

export default BuildingRow;
