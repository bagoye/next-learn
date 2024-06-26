import { connectDB } from "@/util/database";

export default async function handler(request, respond) {
  if (request.method == "POST") {
    if (request.body.title == '') {
        return respond.status(500).json("제목이 비어있음")
    }
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").insertOne(request.body);
    return respond.status(200).redirect(`/list`)
  }
}
