"use client";
import { Button, Drawer, Stack, TagsInput, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import useToast from "../hooks/useToast";
import { useAddCourse } from "@/lib/query-hooks/course";

type Props = {};

const defaultValues = {
  scheme: "2019",
  no_of_modules: "5",
};

const topicFields = [1, 2, 3, 4, 5];

const AddCourse = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { Toast, showToast } = useToast();
  const form = useForm<any>({ defaultValues });
  const { mutate: addCourse } = useAddCourse();

  const onSubmit = (data: any) => {
    // showToast("Course saved", "success");
    const submitValues = {
      ...data,
      topics: [],
      no_of_modules: 5,
      semester: Number(data.semester),
      hours: Number(data.hours),
      credits: Number(data.credits),
    };
    console.log(submitValues);

    addCourse(data);
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
              name="department"
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

            {topicFields.map((_, index) => (
              <Controller
                key={`topics-field-${index}`}
                name={`module-${index}-topic`}
                control={form.control}
                render={({ field }) => (
                  <TagsInput
                    component="textarea"
                    {...field}
                    label={`Module ${index + 1}`}
                    description="Enter syllabus topics in this module; either by seperated by comma(,) or by using enter key after each topic"
                    placeholder="Enter syllabus topics"
                  />
                )}
              />
            ))}

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
