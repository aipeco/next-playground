"use client"; // menandai komponen ini ada interaksi user

import { useEffect, useState } from "react";

export default function ProductAmount() {
  const [amount, setAmount] = useState(
    // basepractice
    Number(localStorage.getItem("amount") ?? "0"), //tidak di hardcode
  );
  const [note, setNote] = useState("");

  useEffect(
    function () {
        localStorage.setItem("amount", String(amount));
    }, [amount]
  )

  function onClickPlus() {
    setAmount(amount + 1);
  }

  function onClickMinus() {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  }

  function onChangeNote(event: React.ChangeEvent<HTMLInputElement>) {
    setNote(event.target.value)
  }

  return (
    <div>
      <button onClick={onClickPlus}>+</button>
      <p>{amount}</p>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
}
