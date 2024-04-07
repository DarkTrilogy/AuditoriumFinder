import styled from "styled-components";

import { HiArrowUpOnSquare } from "react-icons/hi2";
import { useCheckout } from "../check-in-out/useCheckout";
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
import UserDataBox from "./UserDataBox";
import { useUser } from "./useUser";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function UserDetail() {
  const { checkout, isCheckingOut } = useCheckout();

  const { user, isLoading } = useUser();
  const moveBack = useMoveBack();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  if (!user) return <Empty resourceName="user" />;

  const { userId, userNickname: nickname } = user;
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
            User #{userId} - {nickname}
          </Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <UserDataBox user={user} />
      {/* TODO: изменить под возможность отправки запроса в друзья */}

      {/* <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${userId}`)}>
            Check in
          </Button>
        )}

        {status === "checked-in" && (
          <Button
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkout(userId)}
            disabled={isCheckingOut}
          >
            Check out
          </Button>
        )} */}
      <Button variation="secondary" onClick={moveBack}>
        Back
      </Button>
      {/* </ButtonGroup> */}
    </>
  );
}

export default UserDetail;
