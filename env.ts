import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(["development", "production", ""]),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
  },
});

export { env };
