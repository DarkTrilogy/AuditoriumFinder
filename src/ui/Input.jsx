import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);

  // если придет определенный пропс, то меняем стили
  ${(props) =>
    props.small &&
    `
    width: fit-content;
  `}
`;

export default Input;
