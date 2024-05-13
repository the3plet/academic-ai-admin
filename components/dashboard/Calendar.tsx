"use client";
import React from "react";
import { ResponsiveTimeRange } from "@nivo/calendar";
import calendarData from "./calendarData.json";
import { Title } from "@mantine/core";

type Props = {};

const Calendar = (props: Props) => {
  const data = calendarData.data;

  return (
    <>
      <Title order={3} mt={"md"}>Topics Coverage</Title>
      <ResponsiveTimeRange
        data={data}
        from="2024-01-01"
        to="2024-06-12"
        emptyColor="#eeeeee"
        colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
          {
            anchor: "bottom-right",
            direction: "row",
            justify: false,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: "right-to-left",
            translateX: -60,
            translateY: -60,
            symbolSize: 20,
          },
        ]}
      />
    </>
  );
};

export default Calendar;
