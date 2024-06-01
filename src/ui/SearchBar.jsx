import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import { useSearchParams } from "react-router-dom";

const inputSizes = {
  common: css``,
  screen: css`
    width: 92vw;
    text-align: center;
  `,
};

const buttonProps = {
  common: css``,
  screen: css`
    display: none;
  `,
};

const Input = styled.input.attrs({
  type: "search",
  id: "default-search",
  placeholder: "Enter data...",
  className:
    "block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
})`
  ${(props) => inputSizes[props.size] || inputSizes.common}
  font-size: 1.6rem;
`;

const Button = styled.button.attrs({
  type: "submit",
  className:
    "absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
})`
  ${(props) => buttonProps[props.location] || buttonProps.common}
  font-size: 1.6rem;
`;

function SearchBar({ prop }) {
  const { handleSubmit, reset } = useForm();
  // const { errors } = formState;
  const filterField = "search";

  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(
    function () {
      onSubmit();
    },
    [searchQuery],
  );

  async function onSubmit() {
    if (!searchQuery) {
      searchParams.delete(filterField);
      setSearchParams(searchParams);
    }
    searchParams.set(filterField, searchQuery);

    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
    reset();
  }

  return (
    <form class="ml-0 max-w-md" onSubmit={handleSubmit(onSubmit)}>
      <label
        for="default-search"
        class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>
      <div class="relative w-searchBar">
        <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            class="h-5 w-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        {/* <SearchRow error={errors?.search?.message}> */}
        <Input
          size={prop}
          type="text"
          id="search"
          // {...register("search", {
          //   required: "This field is required",
          // })}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        {/* </SearchRow> */}

        <Button location={prop}>Search</Button>
      </div>
    </form>
  );
}

export default SearchBar;
