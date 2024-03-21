"use client";
import DeptList from "@/components/exam/DeptList";
import { Card, Grid, Text, Title } from "@mantine/core";
import React from "react";

type Props = {};

const Exams = (props: Props) => {
  return (
    <div >
      <Title order={2}>Exams/Assessments</Title>
    <DeptList/>
    </div>
  );
};

export default Exams;
