import AddCourse from "@/components/course/AddCourse";
import CourseList from "@/components/course/CourseList";
import {
  Button,
  Flex,
  Group,
  Table,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React from "react";

type Props = {};

const Courses = (props: Props) => {
  return (
    <div>
      <Title order={2}>Courses</Title>
      <Group justify="space-between" my="sm">
        <TextInput placeholder="Search courses" />

        <AddCourse />
      </Group>

      <CourseList />
    </div>
  );
};

export default Courses;
