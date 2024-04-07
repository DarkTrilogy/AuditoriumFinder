import { useNavigate } from "react-router-dom";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import { HiEye } from "react-icons/hi2";
import styled from "styled-components";

const Type = styled.div`
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

function AudienceRow({ audience, onClick }) {
  const navigate = useNavigate();
  const {
    id,
    name,
    type,
    capacity,
    corpus,
    noiseUsersAmount,
    silentUsersAmount,
    projector,
    socketsAmount,
  } = audience;

  return (
    <Table.Row onClick={onClick}>
      <Type>{type}</Type>
      <Type>
        {corpus.name}
        {name}
      </Type>

      <Tag type="green">
        <span>{silentUsersAmount}</span>
      </Tag>

      <Tag type="red">
        <span>{noiseUsersAmount}</span>
      </Tag>
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={id} />
          <Menus.List id={id}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/buildings/${id}`, { state: { id } })}
            >
              See details
            </Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </Modal>
    </Table.Row>
  );
}

export default AudienceRow;
