import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { registrations, brands, programs } from "./schema";

export type NewRegistration = InferInsertModel<typeof registrations>;

export type Brand = InferSelectModel<typeof brands>;
export type Program = InferSelectModel<typeof programs>;

export type BrandWithPrograms = Brand & { programs: Program[] };
