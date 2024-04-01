import { HiLanguage, HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useLocalization } from "../context/LocalizationContext";

function LanguageToggle() {
  const { language, toggleLanguage } = useLocalization();

  return (
    <ButtonIcon onClick={toggleLanguage}>
      <HiLanguage />
    </ButtonIcon>
  );
}

export default LanguageToggle;
