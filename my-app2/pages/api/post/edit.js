import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, respond) {
  if (request.method == "POST") {
    let update = { title: request.body.title, content: request.body.content };
    const db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(request.body._id) }, { $set: update });
    respond.status(200).redirect("/list");
  }
}
