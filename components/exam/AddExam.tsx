import { Button, NativeSelect, Stack } from "@mantine/core";
import { DatePickerInput } from '@mantine/dates';
import React, { useState } from "react";

type Props = {};

const AddExam = (props: Props) => {
    const [value, setValue] = useState<Date | null>(null);
  return (
    <Stack>
      <NativeSelect
        label="Semester"
        data={["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"]}
      />
      <DatePickerInput
        label="First Series"
        placeholder="Pick date"
        value={value}
        onChange={setValue}
      />
      <DatePickerInput
        label="Second Series"
        placeholder="Pick date"
        value={value}
        onChange={setValue}
      />
      <DatePickerInput
        label="Semester Exam"
        placeholder="Pick date"
        value={value}
        onChange={setValue}
      />
      <Button type="submit">Save</Button>
    </Stack>
  );
};

export default AddExam;
