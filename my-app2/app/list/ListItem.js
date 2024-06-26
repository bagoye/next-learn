"use client";

import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link prefetch={false} href={`/detail/${result[i]._id}`}>
              <h4>{a.title}</h4>
              {/* 아래처럼 써도 댐 ㅋ */}
              {/* <h4>{result[i].title}</h4> */}
            </Link>
            <Link href={`/edit/${result[i]._id}`}>✏️</Link>
            <span
              onClick={(e) => {
              //   fetch("/api/post/delete", {
              //     method: "DELETE",
              //     body: result[i]._id,
              //   })
              //     .then((r) => r.json())
              //     .then(() => {
              //       e.target.parentElement.style.opacity = 0;
              //       setTimeout(() => {
              //         e.target.parentElement.style.display = "none";
              //       }, 1000);
              //     });
              fetch()
              }}
            >
              🗑️
            </span>
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
