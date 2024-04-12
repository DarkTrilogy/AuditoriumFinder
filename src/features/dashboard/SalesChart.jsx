import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";
import { addHours, format } from "date-fns";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

function SalesChart({ totalAmount }) {
  const { isDarkMode } = useDarkMode();
  const hours = Array.from({ length: 24 }, (_, i) =>
    addHours(new Date().setHours(0, 0, 0, 0), i),
  );

  const peakHours = [8, 9, 10, 11, 16, 17, 18];
  const maxPeakValue = totalAmount / 4; // Maximum value for the peak point

  const data = hours.map((hour) => {
    const hourIndex = hour.getHours();
    const isPeak = peakHours.includes(hourIndex);
    return {
      time: format(hour, "ha"),
      emptyAuditoriums: isPeak
        ? // For peak hours, calculate a value not exceeding 1/4 of totalAmount
          Math.floor(Math.random() * maxPeakValue)
        : // For non-peak hours, ensure the value is somewhat lesser but also realistic
          Math.floor(Math.random() * (maxPeakValue * 0.75)),
    };
  });

  const colors = isDarkMode
    ? {
        stroke: "#4f46e5",
        fill: "#6378e9",
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        stroke: "#4f46e5",
        fill: "#c7d2fe",
        text: "#374151",
        background: "#fff",
      };

  return (
    <StyledSalesChart>
      <Heading as="h2">Hourly Empty Auditoriums Overview</Heading>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="time"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit=" units"
            tick={{ fill: colors.text }}
            allowDecimals={false}
            tickLine={{ stroke: colors.text }}
            domain={[0, totalAmount]}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip
            contentStyle={{
              backgroundColor: colors.background,
              borderColor: colors.stroke,
            }}
          />
          <Area
            type="monotoneX"
            dataKey="emptyAuditoriums"
            stroke={colors.stroke}
            fill={colors.fill}
            strokeWidth={2}
            name="Empty Auditoriums"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default SalesChart;
