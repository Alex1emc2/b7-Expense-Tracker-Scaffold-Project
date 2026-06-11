import { useParams, useNavigate } from "react-router-dom";
import { useExpense } from "../context/useExpense";

const Detail = () => {
  /*=======================================
        INIT
  =======================================*/
  const { expenses } = useExpense();
  const { id } = useParams();
  const navigate = useNavigate();
  const NumberId = Number(id);
  const detail = expenses.find((e) => e.id === NumberId);

  /*=======================================
        UI
  =======================================*/
  return (
    <div>
      {detail ? (
        <strong>
          <h2>
            Detail Expense ID: {id}
            <p>title: {detail.title}</p>
            <p>amount: {detail.amount}</p>
            <p>category: {detail.category}</p>
            <p>date: {detail.date}</p>
          </h2>
        </strong>
      ) : (
        <li>
          <p> the id({id}) is undefine</p>
        </li>
      )}
      <button style={{ padding: "8px" }} onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default Detail;
