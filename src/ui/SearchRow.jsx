import styled from "styled-components";

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function SearchRow({ error, children }) {
  return (
    <>
      {children}
      {error && <Error>{error}</Error>}
    </>
  );
}

export default SearchRow;
