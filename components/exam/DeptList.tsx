import { Card, Grid, Text } from "@mantine/core";
import React from "react";

type Props = {};

const DeptList = (props: Props) => {
  return (
    <Grid align="center" justify="center" my="sm">
      <Grid.Col span={3}>
        <Card
          padding="xl"
          radius="md"
          withBorder
          className=" hover:border-[#008DDA] transition-colors duration-300"
        >
          <Text ta="center" size="xl" fw={600}>
            CSE
          </Text>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card
          padding="xl"
          radius="md"
          withBorder
          className=" hover:border-[#008DDA] transition-colors duration-300"
        >
          <Text ta="center" size="xl" fw={600}>
            ME
          </Text>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card
          padding="xl"
          radius="md"
          withBorder
          className=" hover:border-[#008DDA] transition-colors duration-300"
        >
          <Text ta="center" size="xl" fw={600}>
            ECE
          </Text>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card
          padding="xl"
          radius="md"
          withBorder
          className=" hover:border-[#008DDA] transition-colors duration-300"
        >
          <Text ta="center" size="xl" fw={600}>
            CE
          </Text>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card
          padding="xl"
          radius="md"
          withBorder
          className=" hover:border-[#008DDA] transition-colors duration-300"
        >
          <Text ta="center" size="xl" fw={600}>
            IT
          </Text>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card
          padding="xl"
          radius="md"
          withBorder
          className=" hover:border-[#008DDA] transition-colors duration-300"
        >
          <Text ta="center" size="xl" fw={600}>
            EEE
          </Text>
        </Card>
      </Grid.Col>
    </Grid>
  );
};

export default DeptList;
