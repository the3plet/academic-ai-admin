"use client";
import { Controller, useForm } from "react-hook-form";
import { Button, Modal, SimpleGrid, Stack, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { useAddExams } from "@/lib/query-hooks/exams";
import useToast from "../hooks/useToast";

type Props = {};

const AddExam = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { Toast, showToast } = useToast();
  const { mutate: addExam } = useAddExams();
  const form = useForm<any>();
  const onSubmit = (data: any) => {
    const submitValues = {
      ...data,
      department_name: String(data.department_name),
      semester: String(data.semester),
      series_one_date: String(data.series_one_date),
      series_two_date: String(data.series_two_date),
      end_semester_date: String(data.end_semester_date),
      assignment_1_date: String(data.assignment_1_date),
      assignement_2_date: String(data.assignment_2_date),
    };
    console.log(submitValues);
    addExam(submitValues);
  };
  return (
    <>
      <Button onClick={open}>Add Exam</Button>
      <Modal opened={opened} onClose={close} title="Add Exam" centered>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <SimpleGrid cols={3}>
            <div>
              <Controller
                name="department_name"
                control={form.control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    label="Department Name"
                    placeholder="CSE"
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="semester"
                control={form.control}
                render={({ field }) => (
                  <TextInput {...field} label="Semester" placeholder="2" />
                )}
              />
            </div>
            <div>
              <Controller
                name="series_one_date"
                control={form.control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    label="Series I"
                    placeholder="YYYY-MM-DD"
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="series_two_date"
                control={form.control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    label="Series II"
                    placeholder="YYYY-MM-DD"
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="end_semester_date"
                control={form.control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    label="Semester Exam"
                    placeholder="YYYY-MM-DD"
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="assignment_1_date"
                control={form.control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    label="Assignment I"
                    placeholder="YYYY-MM-DD"
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="assignment_2_date"
                control={form.control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    label="Assignment II"
                    placeholder="YYYY-MM-DD"
                  />
                )}
              />
            </div>
          </SimpleGrid>
          <Stack justify="center">
            <Button type="submit" mt={8}>
              Submit
            </Button>
          </Stack>
        </form>
      </Modal>
      {Toast && <Toast />}
    </>
  );
};

export default AddExam;
