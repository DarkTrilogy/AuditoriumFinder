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
import { TiTick } from "react-icons/ti";
import { GiCancel } from "react-icons/gi";
import { useAcceptRequest } from "./useAcceptReques";
import { useDeclineRequest } from "./useDeclineRequest";

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

function RequestRow({ request: { userid, userNickname: nickname }, type }) {
  const navigate = useNavigate();
  const { checkout, isCheckingOut } = useCheckout();
  const { isAccepting, acceptRequest } = useAcceptRequest();
  const { isDeclining, declineRequest } = useDeclineRequest();
  const currentUserId = localStorage.getItem("userId");

  const status = "friend";
  const statusToTagName = {
    agree: "green",
    disagree: "red",
  };

  function agree() {
    acceptRequest({ id: userid, currentUserId });
  }
  function disagree() {
    console.log("PARAMS78", { id: userid, currentUserId });
    declineRequest({ id: userid, currentUserId });
  }

  return (
    <Table.Row>
      <Stacked>
        <span>{nickname}</span>
        <span>{nickname}</span>
      </Stacked>

      {type === "incoming" && (
        <>
          <Tag type={statusToTagName["agree"]} onClick={agree}>
            <TiTick size={32} />
            {/* {status.replace("-", " ")} */}
          </Tag>

          <Tag type={statusToTagName["disagree"]} onClick={disagree}>
            <GiCancel size={32} />
            {/* {status.replace("-", " ")} */}
          </Tag>
        </>
      )}

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={userid} />
          <Menus.List id={userid}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/requests/${userid}`)}
            >
              See details
            </Menus.Button>

            {status === "unconfirmed" && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${userid}`)}
              >
                Check in
              </Menus.Button>
            )}

            {status === "checked-in" && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                onClick={() => checkout(userid)}
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
          {/* <ConfirmDelete
            resourceName="friend"
            disabled={isDeleting}
            onConfirm={() => deleteFriend(friendId, friendId)} // как передать 2 аргумента в useDeleteFriend - friendId и id - ? - см. useDeleteBooking
          /> */}
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default RequestRow;