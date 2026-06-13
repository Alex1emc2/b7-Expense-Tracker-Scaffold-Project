import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useExpense } from "../context/useExpense";

const Home = () => {
  /*=======================================
        INIT
  =======================================*/
  const { expenses, deleteExpense, resetExpense, currencies, changeCurrency } =
    useExpense();
  const navigate = useNavigate();

  const [currency, setCurrency] = useState(currencies[0]?.currency);

  const total = expenses.reduce((sum, e) => sum + e.amount, 0).toLocaleString();

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
      <p>
        <strong>
          Total:
          <select
            value={currency}
            onChange={(e) => {
              setCurrency(e.target.value);
              changeCurrency({ currency: e.target.value });
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

      <ul>
        {expenses.map((e) => (
          <li
            key={e.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px",
              borderBottom: "1px solid #ddd",
              listStyle: "none",
            }}
          >
            <Link to={`/detail/${e.id}`} style={{ textDecoration: "none" }}>
              {e.title}
            </Link>
            {e.category}
            {" || "} {currencies[0]?.currency} {e.amount.toLocaleString()}
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
