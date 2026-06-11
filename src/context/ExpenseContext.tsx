import { createContext } from "react";
import type { Expense, Currency } from "../types";

export interface ExpenseType {
  expenses: Expense[];
  addExpense: (e: Expense) => void;
  deleteExpense: (id: number) => void;
  resetExpense: () => void;
  currencies: Currency[];
  changeCurrency: (e: Currency) => void;
}

export const ExpenseContext = createContext<ExpenseType | null>(null);
