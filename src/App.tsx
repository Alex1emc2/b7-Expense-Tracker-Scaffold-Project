import { Routes, Route } from "react-router-dom";
import { ExpenseProvider } from "./context/ExpenseContext";
import AddExpense from "./pages/AddExpense";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const App = () => (
  <ExpenseProvider>
    <h2 style={{ color: "darkblue" }}>EXPENSE TRACKER 2.0</h2>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/add" element={<AddExpense />} />
    </Routes>
  </ExpenseProvider>
);

export default App;
