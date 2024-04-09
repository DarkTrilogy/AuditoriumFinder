import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  /* justify-content: space-between; */
  justify-content: ${(props) =>
    !props.isModerator ? "flex-end" : "space-between"};
`;

function Header({ isModerator }) {
  console.log("HEADER123");
  return (
    <StyledHeader isModerator={isModerator}>
      {/* <div>
        <SearchBar />
      </div> */}
      {/* <div class="flex"> */}
      <UserAvatar />
      <HeaderMenu isModerator={isModerator} />
      {/* </div> */}
    </StyledHeader>
  );
}

export default Header;
