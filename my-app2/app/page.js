import { connectDB } from "@/util/database";
import { MongoClient } from "mongodb";

export default async function Home() {

  const db = (await connectDB).db("forum")
  let result = await db.collection('post').find().toArray()
  console.log(result)

  return (
    <div>
      <h4>메인페이지</h4>
    </div>
  );
}
