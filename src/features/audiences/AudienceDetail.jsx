import styled from "styled-components";

import { useMoveBack } from "../../hooks/useMoveBack";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Empty from "../../ui/Empty";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import Tag from "../../ui/Tag";
import AudienceDataBox from "./AudienceDataBox";
import { useAudience } from "./useAudience";
import {
  useAddUserToAuditorium,
  useUserAudience,
} from "./useAudiencesFunctions";
import ButtonGroup from "../../ui/ButtonGroup";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import { useNavigate } from "react-router-dom";
import ConfirmAdding from "../../ui/ConfirmAdding";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function AudienceDetail() {
  const { audience, isLoading, error } = useAudience();

  const navigate = useNavigate();
  const moveBack = useMoveBack();
  const { isAdding, addUserToAudience } = useAddUserToAuditorium();
  const { userAudience } = useUserAudience();

  const userId = localStorage.getItem("userId");
  console.log("fja;sldkf", userId);

  if (isLoading) return <Spinner />;
  if (error) return <Empty resourceName="audience" />;

  const { id, type } = audience;
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
            Audience #{id} - {type}
          </Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <AudienceDataBox audience={audience} />

      <ButtonGroup>
        <Modal>
          <Modal.Open opens="add">
            <Button icon={<HiArrowUpOnSquare />} disabled={false}>
              Check in
            </Button>
          </Modal.Open>
          <Modal.Window name="add">
            <ConfirmAdding
              disabled={isAdding}
              onSilent={() => {
                addUserToAudience({
                  userId,
                  audience: audience,
                  silenceStatus: "silent",
                  onSettled: () => {
                    navigate(-1);
                  },
                });
              }}
              onNoise={() => {
                addUserToAudience({
                  userId,
                  audience: audience,
                  silenceStatus: "noise",
                  onSettled: () => {
                    navigate(-1);
                  },
                });
              }}
            />
          </Modal.Window>
        </Modal>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
        <Button
          variation="secondary"
          onClick={() => {
            userAudience(userId)
              .then((data) => {
                console.log("asfda", data);
              })
              .catch((error) => {
                console.error("Error fetching user audience:", error);
              });
          }}
        >
          Get the fuck out
        </Button>
      </ButtonGroup>
    </>
  );
}
export default AudienceDetail;
