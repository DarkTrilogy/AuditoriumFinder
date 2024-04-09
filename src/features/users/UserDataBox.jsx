import styled from "styled-components";
import { HiOutlineUser } from "react-icons/hi2";
import DataItem from "../../ui/DataItem";
import { CiUser } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { FaLock, FaTags, FaUserFriends, FaUserLock } from "react-icons/fa";
import Tag from "../../ui/Tag";
import FormRow2 from "../../ui/FormRow2";

const StyledBookingDataBox = styled.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`;

const Header = styled.header`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
`;

const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`;

function UserDataBox({ profile }) {
  const { nickname, email, emailVisibility, isFriend, tags } = profile;

  return (
    <StyledBookingDataBox>
      <Header>
        <div>
          <HiOutlineUser />
          <p>{nickname}</p>
        </div>
      </Header>

      <Section>
        <DataItem
          icon={<MdAlternateEmail color="var(--color-brand-600)" size={32} />}
          label="Email:"
        >
          {emailVisibility === "PRIVATE" ? <FaLock /> : email}
        </DataItem>
        <DataItem
          icon={<FaUserFriends color="var(--color-brand-600)" size={32} />}
          label="Your Friend:"
        >
          {isFriend && isFriend === true ? "Yes" : "No"}
        </DataItem>
        <DataItem
          icon={<FaTags color="var(--color-brand-600)" size={32} />}
          label="Tags:"
        >
          {/* {tags?.length === 0 && "No tags"}
          {tags?.map((tag) => (
            <Tag key={tag.name} type="green" descriptionPosition="bottom">
              {tag.name}
              <span className="tag-description">{tag.description}</span>
            </Tag>
          ))} */}

          <FormRow2>
            {tags?.map((tag) => (
              <Tag key={tag.name} type="green" descriptionPosition="right">
                {tag.name}
                <span className="tag-description">{tag.description}</span>
              </Tag>
            ))}
          </FormRow2>
        </DataItem>
      </Section>
    </StyledBookingDataBox>
  );
}

export default UserDataBox;
