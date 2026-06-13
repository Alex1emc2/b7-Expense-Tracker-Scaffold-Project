import { Routes, Route } from "react-router-dom";
import { ExpenseProvider } from "./context/ExpenseProvider";
import AddExpense from "./pages/AddExpense";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const App = () => (
  <ExpenseProvider>
    <h2
      style={{
        color: "darkblue",
        display: "flex",
        justifyContent: "center",
        margin: "0px auto",
        paddingTop: "32px",
      }}
    >
      Expense Tracker v2.4
    </h2>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddExpense />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  </ExpenseProvider>
);

export default App;
