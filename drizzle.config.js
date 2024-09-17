/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:RvAuhpaLW1t6@ep-quiet-queen-a54ogxn8.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };
  