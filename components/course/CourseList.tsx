"use client";
import React from "react";
import { Table } from "@mantine/core";
import { useCourses } from "@/lib/query-hooks/course";

type Props = {};

const elements = [
  {
    course_code: "CST205",
    course_name: "OBJECT ORIENTED PROGRAMMING USING JAVA",
    scheme: "2019",
    department: "CSE",
    semester: "3",
  },
  {
    course_code: "CST205",
    course_name: "OBJECT ORIENTED PROGRAMMING USING JAVA",
    scheme: "2019",
    department: "CSE",
    semester: "3",
  },
  {
    course_code: "CST205",
    course_name: "OBJECT ORIENTED PROGRAMMING USING JAVA",
    scheme: "2019",
    department: "CSE",
    semester: "3",
  },
];

const CourseList = (props: Props) => {
  const { data: courses } = useCourses();

  const rows = courses?courses.map((element:any) => (
    <Table.Tr key={element.subject_code}>
      <Table.Td>{element.subject_code}</Table.Td>
      <Table.Td>{element.subject_name}</Table.Td>
      <Table.Td>{element.scheme}</Table.Td>
      <Table.Td>{element.department}</Table.Td>
      <Table.Td>{element.semester}</Table.Td>
    </Table.Tr>
  )):null

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Course</Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th>Scheme</Table.Th>
          <Table.Th>Department</Table.Th>
          <Table.Th>Semester</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default CourseList;
