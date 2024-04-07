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

function ConfirmAdding({ onSilent, onNoise, disabled }) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Join to audience</Heading>
      <p>Do you want to join to this audiense as silent or noise user?</p>

      <div>
        <Button variation="secondary" disabled={disabled} onClick={onSilent}>
          Silent
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onNoise}>
          Noise
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmAdding;
