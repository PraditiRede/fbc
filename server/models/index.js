const mongoose = require("mongoose");

const CONNECTION_URL = "mongodb://fbc:b0oK3iNeR$@cluster0-shard-00-00.gtpsj.mongodb.net:27017,cluster0-shard-00-01.gtpsj.mongodb.net:27017,cluster0-shard-00-02.gtpsj.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-7y3oj1-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection ERROR: " + err.message);
});

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!");
});

module.exports.User = require("./user");
