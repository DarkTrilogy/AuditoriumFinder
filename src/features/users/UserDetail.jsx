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
import { useProfile } from "./useProfile";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function UserDetail() {
  const { checkout, isCheckingOut } = useCheckout();

  const { profile, isLoading } = useProfile();
  const moveBack = useMoveBack();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  if (!profile) return <Empty resourceName="user" />;

  const { userid, nickname } = profile;
  const status = "friend";

  const statusToTagName = {
    unconfirmed: "blue",
    "not-friend": "red",
    friend: "green",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">{nickname}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <UserDataBox profile={profile} />
      {/* TODO: изменить под возможность отправки запроса в друзья */}

      <ButtonGroup>
        {status === "unconfirmed" && (
          <ButtonText disabled="true">Waiting for confirmation</ButtonText>
        )}

        {status === "not-friend" && (
          <>
            <Button onClick={() => checkout(userid)} disabled={isCheckingOut}>
              Add to friends
            </Button>
          </>
        )}

        {status === "friend" && (
          <ButtonText disabled="true">Already friends</ButtonText>
        )}
        {/* <Button variation="secondary" onClick={moveBack}>
          Back
        </Button> */}
      </ButtonGroup>
    </>
  );
}

export default UserDetail;
