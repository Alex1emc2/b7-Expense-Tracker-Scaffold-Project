import { useState } from "react";
import { useExpense } from "../context/useExpense";
import { useNavigate } from "react-router-dom";

const AddExpense = () => {
  /*=======================================
        INIT
  =======================================*/
  const { addExpense } = useExpense();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  /*=======================================
        HANDLE SUBMIT
  =======================================*/
  const handleSubmit = () => {
    if (!title.trim() || !amount || !category || !date)
      return alert("you must be fill all the input!!");

    addExpense({
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      date,
    });
    navigate(-1);
  };

  /*=======================================
        UI
  =======================================*/
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <input
        placeholder={"title"}
        type={"text"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "8px", margin: "4px " }}
      />

      <input
        placeholder={"amount"}
        type={"number"}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: "8px", margin: "4px " }}
      />

      <select
        style={{ padding: "8px", margin: "4px " }}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value={""}>category</option>
        <option>Food</option>
        <option>Transportation</option>
        <option>Shopping</option>
        <option>Study</option>
      </select>

      <input
        type={"date"}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ padding: "8px", margin: "4px " }}
      />

      <button onClick={handleSubmit} style={{ padding: "8px", margin: "4px " }}>
        + Add
      </button>
      <button
        onClick={() => navigate(-1)}
        style={{ padding: "8px", margin: "4px " }}
      >
        Back
      </button>
    </div>
  );
};

export default AddExpense;
