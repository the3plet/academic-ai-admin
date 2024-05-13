import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type TCourse = {
  course_code: string;
  course_name: string;
  scheme: string;
  department: string;
  semester: string;
};

export type TStat = {
  icon: StaticImport | string;
  count: number;
  label: string;
  outOf?: number;
  isAverage?: boolean;
};

export type TExam = {
  id: number;
  department_name: string;
  semester: string;
  series_one_date: string;
  series_two_date: string;
  end_semester_date: string;
  assignment_1_date: string;
  assignement_2_date: string;
}[];

export type AExam = {
  department_name: string;
  semester: string;
  series_one_date: string;
  series_two_date: string;
  end_semester_date: string;
  assignment_1_date: string;
  assignement_2_date: string;
};
