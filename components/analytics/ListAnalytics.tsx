import { useAnalytics } from "@/lib/query-hooks/analytics";
import {
  Avatar,
  Card,
  Chip,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React, { useState } from "react";

type Props = {};

const ListAnalytics = (props: Props) => {
  const { data: analytics } = useAnalytics();
  console.log(analytics);
  const [checked, setChecked] = useState(true);
  return (
    <>
      <SimpleGrid cols={3}>
        {analytics?.map((student) => (
          <Card shadow="sm" padding="md" radius="md" withBorder style={{width:"auto"}}>
            <Card.Section px="lg" py="xs">
              <Avatar size="xl" />
            </Card.Section>
            <Group >
              <Stack gap={0}>
                <Title order={1}>{student.name}</Title>
                <Text>{student.admission_no}</Text>
              </Stack>
              <Stack gap={4}>
                <Chip checked={checked} defaultChecked variant="light" size="xl">Completed: {student.topic_completed}</Chip>
                <Chip checked={false} defaultChecked variant="light" size="md" color="red">Skipped: {student.no_of_skipped_topics}</Chip>
              </Stack>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ListAnalytics;
