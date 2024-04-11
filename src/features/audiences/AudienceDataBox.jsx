import styled from "styled-components";
import { format, isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";

import DataItem from "../../ui/DataItem";
import { Flag } from "../../ui/Flag";

import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers";
import {
  MdOutlineElectricalServices,
  MdOutlineHearing,
  MdOutlineHearingDisabled,
  MdOutlineSchool,
} from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { BsProjector } from "react-icons/bs";
import { SiGoogleclassroom } from "react-icons/si";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import FormRow2 from "../../ui/FormRow2";
import Tag from "../../ui/Tag";
import { PiStudent } from "react-icons/pi";
import { tr } from "date-fns/locale";

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

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${(props) =>
    props.isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
  color: ${(props) =>
    props.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`;

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;

// A purely presentational component

function AudienceDataBox({ audience, users }) {
  console.log("asjdfl;k", users);
  const {
    id,
    name,
    capacity,
    corpus,
    projector,
    socketsAmount,
    type,
    noiseUsersAmount,
    silentUsersAmount,
    building: {
      address,
      city,
      firstLessonStart,
      lastLessonEnd,
      id: buildingId,
    },
  } = audience;

  return (
    <StyledBookingDataBox>
      <Header>
        <div>
          <HiOutlineHomeModern />
          <span>
            {corpus.name}
            {name}
          </span>
        </div>

        <p>
          {format(new Date(), "EEE, MMM dd yyyy")}
          {/* {formatDistanceFromNow(new Date())}) &mdash;{" "} */}
          {/* {format(new Date(), "EEE, MMM dd yyyy")} */}
        </p>
      </Header>

      <Section>
        <Guest>
          {/* {countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
          <p>
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>National ID {nationalID}</p> */}
        </Guest>
        <DataItem
          icon={
            <MdOutlineElectricalServices
              color="var(--color-brand-600)"
              size={32}
            />
          }
          label="Sockets:"
        >
          {/* {observations} */}
          {socketsAmount}
        </DataItem>
        <DataItem
          icon={<GoPeople color="var(--color-brand-600)" size={32} />}
          label="Capacity:"
        >
          {capacity}
        </DataItem>
        <DataItem
          icon={<BsProjector color="var(--color-brand-600)" size={32} />}
          label="Projector:"
        >
          {projector === false ? "No" : "Yes"}
        </DataItem>
        <DataItem
          icon={<MdOutlineSchool color="var(--color-brand-600)" size={32} />}
          label="Type:"
        >
          {type}
        </DataItem>
        <DataItem
          icon={<FaMicrophone color="var(--color-brand-600)" size={32} />}
          label="Noise people:"
        >
          {noiseUsersAmount}
        </DataItem>
        <DataItem
          icon={<FaMicrophoneSlash color="var(--color-brand-600)" size={32} />}
          label="Silent people:"
        >
          {silentUsersAmount}
        </DataItem>
        <DataItem
          icon={<PiStudent color="var(--color-brand-600)" size={32} />}
          label="Students in audience:"
        >
          <FormRow2>
            {Object.entries(users).map(([userId, user]) =>
              user.userid !== Number(localStorage.getItem("userId")) ? (
                <Tag
                  key={userId}
                  type="green"
                  descriptionPosition="right"
                  isSelected={true}
                >
                  {user.nickname}
                  <span className="tag-description">{user.email}</span>
                </Tag>
              ) : (
                <Tag
                  key={userId}
                  type="blue"
                  descriptionPosition="right"
                  isSelected={true}
                >
                  YOU
                  <span className="tag-description">{user.email}</span>
                </Tag>
              ),
            )}
          </FormRow2>
        </DataItem>
      </Section>

      <Footer>
        {/* <p>
          Open until
          {format(new Date(), "EEE, MMM dd yyyy, p")}
        </p> */}
      </Footer>
    </StyledBookingDataBox>
  );
}

export default AudienceDataBox;
