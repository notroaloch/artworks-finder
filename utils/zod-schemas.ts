import { z } from 'zod';

// Search Schema
export const searchSchema = z.object({
  query: z.string({ required_error: 'Requerido' }).trim().min(1, 'Requerido'),
});

export type SearchSchema = z.infer<typeof searchSchema>;
