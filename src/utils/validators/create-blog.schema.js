import { z } from 'zod';

export const blogFormSchema = z.object({
  title: z.string(),
  brief: z.string(),
  content: z.string(),
  status: z.string(),
  thumbnail: z.string(),
});
