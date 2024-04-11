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
  font-size: ${(props) =>
    props.type === "envelope" /* || props.type === "delete" */
      ? "4rem"
      : "1.5rem"};

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

  /* Добавляем стиль для выделения текущего тега */
  ${(props) =>
    props.isSelected &&
    `
  &::before {
    border-color: var(--color-${props.type}-700); /* Цвет обводки соответствует цвету тега */
    transition: border-color 0.3s ease; /* Добавляем плавный переход */
  }
`}

  /* Стиль для не выбранных тегов */
  ${(props) =>
    !props.isSelected &&
    `
  filter: brightness(70%); /* Уменьшаем яркость, чтобы сделать теги более мутными */
  transition: filter 0.3s ease, brightness 0.3s ease; /* Добавляем плавный переход */
  // cursor: not-allowed; /* Меняем курсор на запрещающий, чтобы показать неактивность */
`}

/* Возвращаем прежнюю яркость при наведении на неактивный тег */
${(props) =>
    !props.isSelected &&
    `
  &:hover {
    filter: brightness(100%); /* Возвращаем прежнюю яркость */
  }
`}

  /* Стиль для обводки выбранного тега */
  &::before {
    content: "";
    position: absolute;
    top: -2px; /* Отступ вверх для обводки */
    left: -2px; /* Отступ влево для обводки */
    right: -2px; /* Отступ вправо для обводки */
    bottom: -2px; /* Отступ вниз для обводки */
    border: 2px solid transparent; /* Создаем пустую обводку */
    border-radius: 100px; /* Задаем скругление для обводки */
  }

  /* Стиль для обводки выбранного тега того же цвета, что и тег */
  ${(props) =>
    props.isSelected &&
    `
    &::before {
      border-color: var(--color-${props.type}-700); /* Цвет обводки соответствует цвету тега */
    }
  `}
`;

export default Tag;
