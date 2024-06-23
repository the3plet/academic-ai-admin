'use client'
import { useExams } from "@/lib/query-hooks/exams";
import { Table } from "@mantine/core";
import React from "react";

type Props = {};

const ExamList = (props: Props) => {
  const { data: exams } = useExams();
  const THeading = (
    <Table.Tr>
      <Table.Th>Department Name</Table.Th>
      <Table.Th>Semester</Table.Th>
      <Table.Th>Series One</Table.Th>
      <Table.Th>Series Two</Table.Th>
      <Table.Th>Semester Exam</Table.Th>
      <Table.Th>Assignment 1</Table.Th>
      <Table.Th>Assignment 2</Table.Th>
    </Table.Tr>
  );

  const TRow = exams?exams.map((exam)=> (
  <Table.Tr key={exam.id}>
  <Table.Td>{exam.department_name}</Table.Td>
  <Table.Td>{exam.semester}</Table.Td>
  <Table.Td>{exam.series_one_date}</Table.Td>
  <Table.Td>{exam.series_two_date}</Table.Td>
  <Table.Td>{exam.end_semester_date}</Table.Td>
  <Table.Td>{exam.assignment_1_date}</Table.Td>
  <Table.Td>{exam.assignement_2_date}</Table.Td>
</Table.Tr>
  )):null

  console.log(exams);
  return (
    <Table>
        <Table.Thead>
            {THeading}
            {TRow}
        </Table.Thead>
    </Table>
  )
};
export default ExamList;
