"use client";
import { Button, Drawer, Stack, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import useToast from "../hooks/useToast";

type Props = {};

const defaultValues = {
  scheme: "2019",
  no_of_modules: "5",
};

const AddCourse = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { Toast, showToast } = useToast();
  const form = useForm<any>({ defaultValues });

  const onSubmit = (data) => {
    showToast("Course saved", "success");

    axios
      .post("http://127.0.0.1:8000/courses/courses", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Add Course"
        position="right"
      >
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Stack gap="sm">
            <Controller
              name="course_code"
              control={form.control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Course code"
                  // description="Enter your course code; three letters followed by three digits"
                  placeholder="CST205"
                />
              )}
            />
            <Controller
              name="course_name"
              control={form.control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Course name"
                  // description="Enter your course code; three letters followed by three digits"
                  placeholder="OBJECT ORIENTED
                PROGRAMMING
                USING JAVA"
                />
              )}
            />
            <Controller
              name="credits"
              control={form.control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Credits"
                  // description="Enter your course code; three letters followed by three digits"
                  placeholder="4"
                />
              )}
            />
            <Controller
              name="scheme"
              control={form.control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Scheme"
                  // description="Enter your course code; three letters followed by three digits"
                  placeholder="2019"
                />
              )}
            />
            <Controller
              name="dept"
              control={form.control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Department"
                  // description="Enter your course code; three letters followed by three digits"
                  placeholder="CSE"
                />
              )}
            />
            <Controller
              name="semester"
              control={form.control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Semester"
                  // description="Enter your course code; three letters followed by three digits"
                  placeholder="3"
                />
              )}
            />
            <Controller
              name="no_of_modules"
              control={form.control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="No of modules"
                  // description="Enter your course code; three letters followed by three digits"
                  placeholder="5"
                />
              )}
            />

            <Controller
              name="hours"
              control={form.control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="No of hours"
                  // description="Enter your course code; three letters followed by three digits"
                  placeholder="45"
                />
              )}
            />
            <Button type="submit">Save</Button>
          </Stack>
        </form>
      </Drawer>

      <Button onClick={open}>Add course</Button>

      {Toast && <Toast />}
    </>
  );
};

export default AddCourse;
