import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { MODERATOR_EMAIL } from "../utils/constants";

const StyledLogo = styled.div`
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();

  const { user } = useUser();
  const isModerator = user?.email === MODERATOR_EMAIL;

  const urlToNavigate = isModerator ? "/moderator" : "/";

  const src = isDarkMode ? "/hse-light.png" : "/hse-dark.png";

  return (
    <StyledLogo className="grid justify-center gap-10">
      <Img
        className="m-auto"
        src={src}
        alt="Logo"
        onClick={() => navigate(urlToNavigate)}
      />
      <span className="uppercase">AuditoriumFinder</span>
    </StyledLogo>
  );
}

export default Logo;
