import { useState, useEffect, createContext, useContext } from "react";
import type { Expense } from "../types";

/*=======================================
        INIT
=======================================*/
interface ExpenseType {
  expenses: Expense[];
  addExpense: (e: Expense) => void;
  deleteExpense: (e: number) => void;
}

const ExpenseContext = createContext<ExpenseType | null>(null);

/*=======================================
        ExpenseProvider
=======================================*/
export const ExpenseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem("expense");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (e: Expense) => {
    setExpenses((prev) => [...prev, e]);
  };

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

/*=======================================
        USE EXPENSE
=======================================*/
export const useExpense = () => {
  const ctx = useContext(ExpenseContext);
  if (!ctx) throw new Error("useContext must be inside ExpenseProvider");
  return ctx;
};
