import data from "./programs-data.json";

export interface Program {
  id: number;
  brandSlug: string;
  title: string;
  slug: string;
  age: string;
  description: string;
  highlights: string[];
  category: string;
  iconName: string;
  isPopular: boolean;
}

export const programs: Program[] = data as Program[];

export async function getPrograms(): Promise<Program[]> {
  return programs;
}

export async function getPopularPrograms(): Promise<Program[]> {
  return programs.filter((p) => p.isPopular);
}
