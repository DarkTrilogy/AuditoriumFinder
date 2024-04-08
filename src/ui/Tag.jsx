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
  cursor: pointer;

  /* Добавляем стили для показа description при наведении */
  position: relative;

  /* Позиционируем описание в зависимости от переданного параметра */
  .tag-description {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transition:
      opacity 0.3s ease,
      visibility 0.3s ease;
    ${(props) => {
      if (props.descriptionPosition === "right") {
        return `
          top: 50%;
          left: calc(100% + 4px);
          transform: translateY(-50%);
          white-space: nowrap;
        `;
      } else if (props.descriptionPosition === "bottom") {
        return `
          top: calc(100% + 4px);
          left: 50%;
          transform: translateX(-50%);
        `;
      }
    }}
  }

  /* Показываем описание при наведении на тег */
  &:hover .tag-description {
    visibility: visible;
    opacity: 1;
  }
`;

export default Tag;
