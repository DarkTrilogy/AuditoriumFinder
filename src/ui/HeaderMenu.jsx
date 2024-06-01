import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu({ isModerator }) {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      {!isModerator && (
        <li>
          <ButtonIcon onClick={() => navigate("/account")}>
            <HiOutlineUser />
          </ButtonIcon>
        </li>
      )}
      <li>
        <DarkModeToggle />
      </li>
      {/* <li>
        <LanguageToggle />
      </li> */}
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
