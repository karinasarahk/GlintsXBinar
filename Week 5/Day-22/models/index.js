const { MongoClient } = require("mongodb"); // Import MongoClient

const uri = process.env.MONGO_URI; // uri = Address of Cluster / Server (MongoDB)

const connection = new MongoClient(uri, {
    useUnifiedTopology: true,
}); // make new connection

// run the connection
try {
    connection.connect();
    console.log("MongoDB connected!");
} catch (e) {
    console.error(e);
}

// export connection
module.exports = connection;