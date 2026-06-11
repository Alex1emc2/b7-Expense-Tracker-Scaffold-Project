import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useExpense } from "../context/useExpense";

const Home = () => {
  /*=======================================
        INIT
  =======================================*/
  const { expenses, deleteExpense, resetExpense, changeCurrency } =
    useExpense();
  const navigate = useNavigate();

  const [currency, setCurrency] = useState("");

  const total = expenses.reduce((sum, e) => sum + e.amount, 0).toLocaleString();

  /*=======================================
        UI
  =======================================*/
  return (
    <div>
      <p>
        <strong>
          Total:
          <select
            value={currency}
            onChange={(e) => {
              setCurrency(e.target.value);
              changeCurrency({ currency: currency });
            }}
            style={{ backgroundColor: "yellow", margin: "8px" }}
          >
            <option>$</option>
            <option>Rp</option>
            <option>Eur</option>
            <option>Btc</option>
          </select>
          {total}
        </strong>
      </p>
      <button onClick={() => navigate("/add")}>Add Expense</button>
      <button
        onClick={resetExpense}
        style={{ color: "white", backgroundColor: "red", marginLeft: "8px" }}
      >
        {" "}
        RESET THE LIST{" "}
      </button>
      <p>{currency}</p>

      <ul>
        {expenses.map((e) => (
          <li key={e.id}>
            <Link to={`/detail/${e.id}`}>{e.title}</Link>
            {" | "} {e.category}
            {" - "} {e.amount.toLocaleString()}
            <button
              onClick={() => deleteExpense(e.id)}
              style={{
                color: "white",
                backgroundColor: "red",
                marginLeft: "8px",
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
