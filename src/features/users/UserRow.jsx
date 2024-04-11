import styled from "styled-components";
import { HiEye, HiOutlineEnvelope } from "react-icons/hi2";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";

import { useNavigate } from "react-router-dom";
import { useUser } from "./useUser";
import { useProfile } from "./useProfile";
import Spinner from "../../ui/Spinner";
import { useMakeFriendRequest } from "../friends/useMakeFriendRequest";
import { FaLock } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useDeleteFriend } from "../friends/useDeleteFriend";
import { useReportUser } from "./useReport";
import { GoReport } from "react-icons/go";

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

function UserRow({ user, onClick }) {
  const navigate = useNavigate();
  const { userid, userNickname: nickname } = user;
  const friendid = userid;

  const { profile, isLoading } = useProfile(userid);
  const { isLoading: isSending, makeRequest } = useMakeFriendRequest();
  const { deleteFriend, isDeleting } = useDeleteFriend();
  const currentUserId = localStorage.getItem("userId");
  const { isReporting, reportStudent } = useReportUser();

  if (isLoading) return <Spinner />;
  console.log("profile12", profile, user);

  const statusToTagName = {
    friend: "green",
    "not-friend": "red",
    unconfirmed: "blue",
  };
  const status = profile.isFriend === true ? "friend" : "not-friend";

  function handleFriendRequest() {
    console.log("USERID", localStorage.getItem("userId"), userid);
    makeRequest({ id: userid, userId: currentUserId });
  }

  return (
    <Table.Row /* onClick={onClick} */>
      <Nickname>{nickname}</Nickname>
      <Nickname>
        {profile.email === null ? <FaLock size={32} /> : profile.email}
      </Nickname>

      {/* <Stacked>
        <span>{localStorage.getItem("email")}</span>
      </Stacked> */}

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

      {profile.isFriend === false && (
        <Tag type="envelope" onClick={handleFriendRequest}>
          <HiOutlineEnvelope />
        </Tag>
      )}

      {profile.isFriend === true && (
        <Tag
          type="red"
          onClick={() => deleteFriend({ friendid, userid: currentUserId })}
        >
          <MdDeleteOutline size={40} />
        </Tag>
      )}

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={userid} />
          <Menus.List id={userid}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/users/${userid}`)}
            >
              See details
            </Menus.Button>
            <Menus.Button
              icon={<GoReport />}
              onClick={() => {
                reportStudent({
                  currentUserId: currentUserId,
                  id: userid,
                  request: { description: "Mat" },
                });
                navigate(`/users/${userid}`);
              }}
            >
              Report student
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
