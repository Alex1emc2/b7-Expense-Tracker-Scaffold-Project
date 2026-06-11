import { useState, useEffect } from "react";
import type { Expense } from "../types";
import { ExpenseContext } from "./ExpenseContext";

/*=======================================
        EXPENSE PROVIDER
=======================================*/
export const ExpenseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  /*=======================================
        INIT
  =======================================*/
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  /*=======================================
        SIDE EFFECT
  =======================================*/
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  /*=======================================
        BUTTON
  =======================================*/
  const addExpense = (e: Expense) => {
    setExpenses((prev) => [...prev, e]);
  };

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const resetExpense = () => {
    if (confirm("ARE YOU SURE? WANT TO RESET THE LIST")) {
      setExpenses([]);
    }
  };

  /*=======================================
        UI
  =======================================*/
  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, deleteExpense, resetExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
