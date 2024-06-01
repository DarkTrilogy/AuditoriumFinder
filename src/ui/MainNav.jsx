import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineEnvelopeOpen,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUserGroup,
  HiOutlineUsers,
} from "react-icons/hi2";
import { useLocalization } from "../context/LocalizationContext";
import {
  BOOKINGS_EN,
  BOOKINGS_RU,
  BUILDINGS_EN,
  BUILDINGS_RU,
  FRIENDS_EN,
  FRIENDS_RU,
  HOME_EN,
  HOME_RU,
  REPORTS_EN,
  REPORTS_RU,
  REQUESTS_EN,
  REQUESTS_RU,
  SETTINGS_EN,
  SETTINGS_RU,
  USERS_EN,
  USERS_RU,
} from "../utils/constants";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav({ role }) {
  const { language } = useLocalization();

  return (
    <nav>
      {role === "moderator" ? (
        <NavList>
          <li>
            <StyledNavLink to="/reports">
              <HiOutlineUsers />
              <span>{language === "en" ? REPORTS_EN : REPORTS_RU}</span>
            </StyledNavLink>
          </li>
        </NavList>
      ) : (
        <NavList>
          <li>
            <StyledNavLink to="/dashboard">
              <HiOutlineHome />
              <span>{language === "en" ? HOME_EN : HOME_RU}</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/bookings">
              <HiOutlineCalendarDays />
              <span>{language === "en" ? BOOKINGS_EN : BOOKINGS_RU}</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/buildings">
              <HiOutlineHomeModern />
              <span>{language === "en" ? BUILDINGS_EN : BUILDINGS_RU}</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/users">
              <HiOutlineUserGroup />
              <span>{language === "en" ? USERS_EN : USERS_RU}</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/friends">
              <HiOutlineUsers />
              <span>{language === "en" ? FRIENDS_EN : FRIENDS_RU}</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/requests">
              <HiOutlineEnvelopeOpen />
              <span>{language === "en" ? REQUESTS_EN : REQUESTS_RU}</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/settings">
              <HiOutlineCog6Tooth />
              <span>{language === "en" ? SETTINGS_EN : SETTINGS_RU}</span>
            </StyledNavLink>
          </li>
        </NavList>
      )}
    </nav>
  );
}

export default MainNav;
