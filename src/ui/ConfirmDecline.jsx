import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmReportOperation({
  resourceName,
  onConfirm,
  disabled,
  onCloseModal,
  action,
  message,
}) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">
        {action} {resourceName}
      </Heading>
      <p>{message}</p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Decline
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmReportOperation;
