/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://gincode18:zWRI5iM1hZTG@ep-plain-water-a51hgbd0.us-east-2.aws.neon.tech/AI_MOCK_INTERVIW?sslmode=require',
    }
  };