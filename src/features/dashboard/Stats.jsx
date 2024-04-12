import { HiOutlineBanknotes, HiOutlineChartBar } from "react-icons/hi2";
import Stat from "./Stat";
import { MdMeetingRoom } from "react-icons/md";

function Stats({ totalAmount, freeAmount }) {
  console.log("totalAuditoriums", totalAmount, "freeAuditoriums", freeAmount);

  const totalAuditoriums =
    totalAmount === null || totalAmount === undefined
      ? "-"
      : Number(totalAmount);
  const freeAuditoriums =
    freeAmount === null || freeAmount === undefined ? "-" : Number(freeAmount);

  // Процент свободных аудиторий
  const freeAuditoriumsPercentage =
    freeAuditoriums === "-" || totalAuditoriums === "-"
      ? "-"
      : (freeAuditoriums / totalAuditoriums) * 100;

  return (
    <>
      <Stat
        title="Free Auditoriums"
        color="green"
        icon={<MdMeetingRoom />}
        value={freeAuditoriums}
      />

      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={
          freeAuditoriumsPercentage === "-"
            ? "-"
            : `${Math.round(freeAuditoriumsPercentage)}%`
        }
      />
    </>
  );
}

export default Stats;
