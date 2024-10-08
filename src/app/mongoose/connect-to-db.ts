import mongoose from "mongoose";

let client: any = null;
let bucket: any = null;

const MONGOB_URI = process.env.MONGOB_URI;

async function connectToDb() {
  if (client) {
    return { client, bucket };
  }

  await mongoose.connect(
    MONGOB_URI as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any,
  );

  client = mongoose.connection;
  const db = mongoose.connection.db; // Use mongoose.connection directly
  console.log("Connected to db", db);
  bucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: "images",
  });

  return { client, bucket };
}

export default connectToDb;
