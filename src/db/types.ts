import type { InferInsertModel } from "drizzle-orm";
import { registrations } from "./schema";
import type { Brand as DataBrand, BrandWithPrograms as DataBrandWithPrograms } from "@/data/brands";
import type { Program as DataProgram } from "@/data/programs";

export type NewRegistration = InferInsertModel<typeof registrations>;
export type Brand = DataBrand;
export type Program = DataProgram;
export type BrandWithPrograms = DataBrandWithPrograms;
