import { Card, Drawer, Grid, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import AddExam from "./AddExam";

type Props = {};

const DeptList = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Grid align="center" my="sm">
        <Grid.Col span={3}>
          <Card
            padding="xl"
            radius="md"
            withBorder
            className=" hover:border-[#008DDA] transition-colors duration-300"
            onClick={open}
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
            onClick={open}
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
            onClick={open}
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
            onClick={open}
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
            onClick={open}
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
            onClick={open}
          >
            <Text ta="center" size="xl" fw={600}>
              EEE
            </Text>
          </Card>
        </Grid.Col>
      </Grid>
      <Drawer
        opened={opened}
        onClose={close}
        title="Exam Date Updation"
        position="right"
      >
        <AddExam />
      </Drawer>
    </>
  );
};

export default DeptList;
