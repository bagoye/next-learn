import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = (await connectDB).db("forum");

  // db에서 정보 가져오는 거
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.postId) });

  // 수정하는 부분
  await db
    .collection("post")
    .updateOne({ _id: new ObjectId(props.params.postId) }, { $set: {} });

  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input style={{ display: "none" }} name="_id" defaultValue={result._id} />
        <button type="submit">수정</button>
      </form>
    </div>
  );
}
