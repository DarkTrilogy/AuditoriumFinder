import styled from "styled-components";

const Tag = styled.span`
  width: fit-content;
  text-transform: uppercase;
  /* font-size: 1.1rem; */
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  /* Make these dynamic, based on the received prop */
  color: var(--color-${(props) => props.type}-700);
  background-color: var(--color-${(props) => props.type}-100);

  // Envelope
  font-size: ${(props) => (props.type === "envelope" ? "4rem" : "1.1rem")};
  color: ${(props) => props.type === "envelope" && "var(--color-green-700)"};
  background-color: ${(props) =>
    props.type === "envelope" && `var(--color-green-100)`};
`;

export default Tag;
