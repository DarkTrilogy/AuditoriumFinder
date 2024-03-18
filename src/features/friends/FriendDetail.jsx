import styled from "styled-components";

import { HiArrowUpOnSquare } from "react-icons/hi2";
import { useBooking } from "../bookings/useBooking";
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
import BookingDataBox from "../bookings/BookingDataBox";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useFriends } from "./useFriends";
import { useDeleteFriend } from "./useDeleteFriend";
import { useFriend } from "./useFriend";
import FriendDataBox from "./FriendDataBox";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function FriendDetail() {
  //   const { booking, isLoading } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();
  //   const { deleteBooking, isDeleting } = useDeleteBooking();

  const { friend, isLoading } = useFriend();
  //   const { deleteFriend, isDeleting } = useDeleteFriend();

  const moveBack = useMoveBack();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  //   if (!booking) return <Empty resourceName="report" />;
  if (!friend) return <Empty resourceName="friend" />;

  //   const { status, id: bookingId } = booking;
  const { userId: friendId, userNickname: nickname } = friend;
  const status = "friend";

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
    friend: "green",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">
            Friend #{friendId} - {nickname}
          </Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <FriendDataBox friend={friend} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${friendId}`)}>
            Check in
          </Button>
        )}

        {status === "checked-in" && (
          <Button
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkout(friendId)}
            disabled={isCheckingOut}
          >
            Check out
          </Button>
        )}

        <Modal>
          <Modal.Open opens="delete">
            <Button variation="danger">Delete friend</Button>
          </Modal.Open>

          {/* <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              disabled={isDeleting}
              onConfirm={() =>
                deleteFriend(friendId, {
                  onSettled: () => navigate(-1),
                })
              }
            />
          </Modal.Window> */}
        </Modal>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default FriendDetail;
