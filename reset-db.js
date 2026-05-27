const mongoose = require("mongoose");
require("dotenv").config({ path: "IMS-master/server/.env" });

async function resetDb() {
  try {
    const dbUrl = process.env.DATABASE || "mongodb://localhost/internship";
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    console.log("Connected to database. Dropping all collections...");
    
    // Drop the entire database
    await mongoose.connection.db.dropDatabase();
    
    console.log("Successfully deleted all data from the database!");
    process.exit(0);
  } catch (error) {
    console.error("Error clearing database:", error);
    process.exit(1);
  }
}

resetDb();
