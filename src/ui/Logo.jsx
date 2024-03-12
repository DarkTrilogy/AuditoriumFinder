import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import { useNavigate } from "react-router-dom";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();

  const src = isDarkMode ? "/hse-light.png" : "/hse-dark.png";

  return (
    <StyledLogo className="grid justify-center gap-10">
      <Img
        className="m-auto"
        src={src}
        alt="Logo"
        onClick={() => navigate("/dashboard")}
      />
      <span className="uppercase">AuditoriumFinder</span>
    </StyledLogo>
  );
}

export default Logo;
