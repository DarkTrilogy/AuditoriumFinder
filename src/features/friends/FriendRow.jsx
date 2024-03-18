import styled from "styled-components";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "../bookings/useDeleteBooking";

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

function FriendRow({ friend: { userId: friendId, userNickname: nickname } }) {
  const navigate = useNavigate();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  const status = "friend";
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
    friend: "green",
  };

  return (
    <Table.Row>
      <Stacked>
        <span>{nickname}</span>
        <span>{nickname}</span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={friendId} />
          <Menus.List id={friendId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/friends/${friendId}`)}
            >
              See details
            </Menus.Button>

            {status === "unconfirmed" && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${friendId}`)}
              >
                Check in
              </Menus.Button>
            )}

            {status === "checked-in" && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                onClick={() => checkout(friendId)}
                disabled={isCheckingOut}
              >
                Check out
              </Menus.Button>
            )}

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete friend</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="booking"
            disabled={isDeleting}
            onConfirm={() => deleteBooking(friendId)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default FriendRow;
