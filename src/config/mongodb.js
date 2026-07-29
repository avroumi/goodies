import { MongoClient } from "mongodb";
import "dotenv/config";

const client = new MongoClient(process.env.MONGO_URI);

export const createConnect = async () => {
  await client.connect();
  console.log("Mongo database connect");
};

export const db = client.db("welfare-record");
