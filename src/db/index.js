import pg from "pg";
import dotenv from "dotenv";
const { Pool } = pg;

const connectDB = async () => {
  const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
  });

  try {
    await pool.connect();
    console.log("Connected to the PostgreSQL database!");
    return pool;
  } catch (error) {
    console.error("PostgreSQL connection FAILED:", error);
    process.exit(1); 
  }
};

export default connectDB;
