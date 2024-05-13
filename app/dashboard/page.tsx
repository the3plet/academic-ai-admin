import Calendar from "@/components/dashboard/Calendar";
import Stats from "@/components/dashboard/Stats";
import { Stack, Title } from "@mantine/core";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <Stack
      h={"100vh"}
      align="stretch"
      gap="md"
    >
      <Title order={2}>Dashboard</Title>

      <Stats />
      <Calendar />
    </Stack>
  );
};

export default Dashboard;
