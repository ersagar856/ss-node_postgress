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
    // This will attempt to get a client from the pool to verify the connection
    await pool.connect();
    console.log("Connected to the PostgreSQL database!");
    return pool; // Return the pool instance for further use
  } catch (error) {
    console.error("PostgreSQL connection FAILED:", error);
    process.exit(1); // Exit the process with an error code
  }
};

export default connectDB;
