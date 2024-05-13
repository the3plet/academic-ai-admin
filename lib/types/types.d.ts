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
