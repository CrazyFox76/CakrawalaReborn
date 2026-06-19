import data from "./passing-grades-data.json";

export type PassingGrade = {
  university: string;
  program: string;
  grade: number;
  category: "IPA" | "IPS" | "Campuran";
  peminat: number;
};

export const passingGrades: PassingGrade[] = data as PassingGrade[];

export async function getPassingGrades() { return passingGrades; }
