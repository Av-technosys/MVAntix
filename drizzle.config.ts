import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://postgres.myrohmuxdzdskrnajsma:Avtechnosys@supabase@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres",
    // ssl: "require",
  },
});
