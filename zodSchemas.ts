import { z } from "zod";

export const dateFromInput = z.coerce.date();
