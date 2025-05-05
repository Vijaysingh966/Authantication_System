const mongoose = require("mongoose");

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log("Database Connected");
    } catch (error) {
        console.log("DB Connection Error:", error);
        process.exit(1);
    }
};

module.exports = dbconnect;
