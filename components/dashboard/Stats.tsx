import { Card, CardSection, Flex, Group, Stack, Text, Title } from "@mantine/core";
import React from "react";
import students from "@/assets/icons/students.svg";
import topics from "@/assets/icons/topics.svg";
import revised from "@/assets/icons/revised.svg";
import skipped from "@/assets/icons/skip.svg";
import score from "@/assets/icons/score.svg";
import { TStat } from "@/lib/types/types";
import Image from "next/image";

type Props = {};

const cards: TStat[] = [
  { icon: students, count: 52, label: "Students enrolled" },
  { icon: topics, count: 18, outOf: 40, label: "Topics completed" },
  {
    icon: revised,
    count: 15,
    outOf: 40,
    label: "Topics revised by students",
    isAverage: true,
  },
  {
    icon: skipped,
    count: 3,
    outOf: 40,
    label: "Topics skipped by students",
    isAverage: true,
  },
  {
    icon: score,
    count: 39,
    outOf: 50,
    label: "Scored on last assessment",
    isAverage: true,
  },
];

const CardItem = ({ stat }: { stat: TStat }) => (
  <Card shadow="sm" padding="lg" radius="md" withBorder miw={200}>
    <Stack gap={"md"}>
      <Image
        alt="icon"
        src={stat.icon}
        height={86}
        width={86}
        style={{ objectFit: "contain" }}
      />

        <Flex align={"baseline"} mt={"xl"}>
          <Title order={1} size={"80px"} lh={0.5}>
            {stat.count}
          </Title>
          {stat?.outOf && (
            <Title style={{ color: "#3C3C3C" }} order={2}>
              /{stat.outOf}
            </Title>
          )}
        </Flex>

        <Text style={{ color: "#3C3C3C" }} fw={500}>
          {stat.label}
        </Text>
    </Stack>
  </Card>
);

const Stats = (props: Props) => {
  return (
    <Group grow gap={"xl"}>
      {cards.map((stat) => (
        <CardItem stat={stat} />
      ))}
    </Group>
  );
};

export default Stats;
