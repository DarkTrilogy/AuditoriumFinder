import styled from "styled-components";
import { HiEye, HiOutlineEnvelope } from "react-icons/hi2";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";

import { useNavigate } from "react-router-dom";

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

function UserRow({ user: { userId, userNickname: nickname, email } }) {
  const navigate = useNavigate();

  const statusToTagName = {
    unconfirmed: "silver",
    confirmed: "green",
    envelope: "green",
  };
  const status = "unconfirmed";

  function handleFriendRequest() {
    // TODO: при авторизации через бэкенд, мы получаем id текущего пользователя
    // и можем отправлять запрос на добавление в друзья другого пользователя при помощи данных id
    // const data = makeFriendRequest(currentUserId, userId);
  }

  return (
    <Table.Row>
      <Nickname>{nickname}</Nickname>

      <Stacked>
        <span>{email}</span>
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

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Tag type="envelope" onClick={() => handleFriendRequest()}>
        <HiOutlineEnvelope />
      </Tag>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={userId} />
          <Menus.List id={userId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/users/${userId}`)}
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

export default UserRow;
