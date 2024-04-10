import styled from "styled-components";
import { HiEye, HiTrash } from "react-icons/hi2";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Spinner from "../../ui/Spinner";

import { useNavigate } from "react-router-dom";
import { useDeleteFriend } from "./useDeleteFriend";
import { useProfile } from "../users/useProfile";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Nickname = styled.div`
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

function FriendRow({ friend: { userid: friendid, userNickname: nickname } }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { deleteFriend, isDeleting } = useDeleteFriend();
  const { profile, isLoading } = useProfile(friendid);
  const userid = localStorage.getItem("userId");

  if (isLoading) return <Spinner />;

  const status = "friend";
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
    friend: "green",
  };

  return (
    <Table.Row>
      <Nickname>{nickname}</Nickname>
      <Nickname>{profile.email}</Nickname>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={friendid} />
          <Menus.List id={friendid}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/users/${friendid}`)}
            >
              See details
            </Menus.Button>

            <Modal.Open opens="delete">
              <Menus.Button
                icon={<HiTrash />}
                onClick={() => deleteFriend({ friendid, userid })}
              >
                Delete friend
              </Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="friend"
            disabled={isDeleting}
            onConfirm={() => deleteFriend({ friendid, userid })}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default FriendRow;
