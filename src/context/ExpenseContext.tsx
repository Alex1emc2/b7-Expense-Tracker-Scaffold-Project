import { createContext } from "react";
import type { Expense } from "../types";

export interface ExpenseType {
  expenses: Expense[];
  addExpense: (e: Expense) => void;
  deleteExpense: (id: number) => void;
  resetExpense: () => void;
}

export const ExpenseContext = createContext<ExpenseType | null>(null);
