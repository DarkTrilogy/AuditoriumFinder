import styled from "styled-components";
import { HiEye } from "react-icons/hi2";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";

import { useNavigate } from "react-router-dom";

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

function BuildingRow({
  building: { id, name, address, firstLessonStart: start, lastLessonEnd: end },
  onClick,
}) {
  const navigate = useNavigate();

  return (
    <Table.Row onClick={onClick}>
      <Stacked>
        <span>{address}</span>
        <span>{name}</span>
      </Stacked>

      <Tag type="green">
        <span>{start}</span>
      </Tag>

      <Tag type="red">
        <span>{end}</span>
      </Tag>
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={id} />
          <Menus.List id={id}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => {
                localStorage.setItem("lastClickedBuildingId", id);
                return navigate(`/buildings/${id}`, { state: { id } });
              }}
            >
              See details
            </Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </Modal>
    </Table.Row>
  );
}

export default BuildingRow;
