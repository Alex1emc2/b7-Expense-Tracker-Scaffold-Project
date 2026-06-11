import { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";

export const useExpense = () => {
  const ctx = useContext(ExpenseContext);
  if (!ctx) throw new Error("useExpense must be inside ExpenseProvider");
  return ctx;
};
