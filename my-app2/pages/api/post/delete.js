import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, respond) {
  if (request.method == "DELETE") {
    const db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(request.body) });
    console.log(request.body);
    respond.status(200).json("삭제완");
  }
}
