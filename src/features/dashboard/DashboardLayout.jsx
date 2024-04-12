import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
import { useBookings } from "../bookings/useBookings";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { data2: bookings, isLoading: isLoading1 } = useBookings(
    localStorage.getItem("lastClickedBuildingId"),
    true,
  );

  if (isLoading1) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        totalAmount={localStorage.getItem("totalAmount")}
        freeAmount={localStorage.getItem("freeAmount")}
      />
      {/* <TodayActivity /> */}
      {/* <DurationChart bookings={bookings} /> */}
      <SalesChart
        bookings={bookings}
        numDays={30}
        totalAmount={localStorage.getItem("totalAmount")}
      />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
