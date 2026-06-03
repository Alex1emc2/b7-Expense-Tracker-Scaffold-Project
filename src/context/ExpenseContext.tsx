import { createContext, useContext, useState } from 'react'
import type { Expense } from '../types'


interface ExpenseType {
    expenses: Expense[]
    addExpense: (e: Expense) => void
    deleteExpense: (id: number) => void
}


const ExpenseContext = createContext<ExpenseType | null>(null)


export const ExpenseProvider = ({ children }: { children: React.ReactNode }) => {
    const [expenses, setExpenses] = useState<Expense[]>([])
    // const [expenses, setExpenses] = useState<Expense[]>(() => {
    //     const saved = localStorage.getItem('expenses')
    //     return saved ? JSON.parse('expenses') : []
    // })

    // useEffect(() => {
    //     localStorage.setItem('expenses', JSON.stringify(expenses))
    // }, [expenses])


    const addExpense = (e: Expense) => {
        setExpenses(prev => [...prev, e])
    }

    const deleteExpense = (id: number) => {
        setExpenses(prev => prev.filter(e => e.id !== id))
    }


    return (
        <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense }}>
            {children}
        </ExpenseContext.Provider>
    )
}


export const useExpense = () => {
    const ctx = useContext(ExpenseContext)
    if(!ctx) throw new Error('useExpense must be inside ExpenseProvider')
    return ctx
}