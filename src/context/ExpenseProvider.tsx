import { useState, useEffect } from "react";
import type { Expense, Currency } from "../types";
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

  const [currencies, setCurrencies] = useState<Currency[]>(() => {
    const saved = localStorage.getItem("currencies");
    return saved ? JSON.parse(saved) : [];
  });

  /*=======================================
        SIDE EFFECT
  =======================================*/
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("currencies", JSON.stringify(currencies));
  }, [currencies]);

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

  const changeCurrency = (e: Currency) => {
    setCurrencies([e]);
  };

  /*=======================================
        UI
  =======================================*/
  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        addExpense,
        deleteExpense,
        resetExpense,
        currencies,
        changeCurrency,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
