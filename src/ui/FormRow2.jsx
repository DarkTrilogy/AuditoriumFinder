import styled from "styled-components";

const StyledFormRow = styled.div`
  display: ${({ type }) =>
    type === "visibility"
      ? "flex"
      : "grid"}; // Используем flex для type === "visibility"
  align-items: center;
  gap: 1.2rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow2({ label, error, children, type }) {
  return (
    <>
      <Label>{label}</Label>

      {type === "visibility" ? (
        <StyledFormRow type={type}>{children}</StyledFormRow>
      ) : (
        <StyledFormRow>
          {children}
          {error && <Error>{error}</Error>}
        </StyledFormRow>
      )}
    </>
  );
}

export default FormRow2;
