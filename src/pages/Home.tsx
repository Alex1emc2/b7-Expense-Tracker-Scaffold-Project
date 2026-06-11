import { useNavigate, Link } from "react-router-dom";
import { useExpense } from "../context/useExpense";

const Home = () => {
  /*=======================================
        INIT
  =======================================*/
  const { expenses, deleteExpense, resetExpense } = useExpense();
  const navigate = useNavigate();

  const total = expenses.reduce((sum, e) => sum + e.amount, 0).toLocaleString();

  /*=======================================
        UI
  =======================================*/
  return (
    <div>
      <p>
        <strong>
          Total:
          <select style={{ backgroundColor: "yellow", margin: "8px" }}>
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
  console.log(expenses.map);
};

export default Home;
