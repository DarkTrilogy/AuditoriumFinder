import styled from "styled-components";
import { useUser } from "./useUser";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../users/useProfile";
import Spinner from "../../ui/Spinner";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
  :hover {
    cursor: pointer;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserAvatar() {
  // const { data: user } = useUser();
  const { profile: user, isLoading } = useProfile();
  const navigate = useNavigate();

  const userMetadata = {
    nickname: user?.nickname,
    avatar: user?.avatar,
  };

  if (isLoading) return <Spinner />;

  return (
    <StyledUserAvatar onClick={() => navigate("/account")}>
      <Avatar
        src={
          localStorage.getItem(`avatar${localStorage.getItem("userId")}`) ||
          "default-user.jpg"
        }
        alt={`{Avatar of ${userMetadata.nickname}}`}
      />
      <span>{userMetadata.nickname}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
