
import AddExam from "@/components/exams/AddExam";
import ExamList from "@/components/exams/ExamList";
import { Flex, Group, TextInput, Title } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import React from "react";

type Props = {};

const Exams = (props: Props) => {
  return (
    <div>
      <Notifications/>
    <Title order={2}>Exams/Assessments</Title>
    <Group justify="space-between" my="sm">
      <TextInput placeholder="Search Exams" />

     <AddExam/>
    </Group>

   <ExamList/>
  </div>
  );
};

export default Exams;
