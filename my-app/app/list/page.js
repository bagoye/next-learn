"use client";

import { useState } from "react";

export default function List() {
  let items = ["Tomatoes", "Paste", "Coconut"];
  let [cnt, setCnt] = useState([0, 0, 0]);

  return (
    <div>
      <h4 className="title">상품목록</h4>

      {items.map((item, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{item} $40</h4>
            <span> {cnt[i]} </span>
            <button
              onClick={() => {
                let copy = [...cnt];
                copy[i]++;
                setCnt(copy);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                let copy = [...cnt];
                copy[i]--;
                setCnt(copy);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
