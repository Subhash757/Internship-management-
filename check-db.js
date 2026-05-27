const mongoose = require("mongoose");
require("dotenv").config({ path: "IMS-master/server/.env" });

async function checkDB() {
  try {
    const dbUrl = process.env.DATABASE || "mongodb://localhost/internship";
    console.log("Connecting to MongoDB at:", dbUrl);
    
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    console.log("Successfully connected to MongoDB!");
    
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("\nCollections in database:");
    if (collections.length === 0) {
      console.log("- (No collections found. Database is empty.)");
    } else {
      collections.forEach(col => console.log(`- ${col.name}`));
    }
    
    process.exit(0);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
}

checkDB();
