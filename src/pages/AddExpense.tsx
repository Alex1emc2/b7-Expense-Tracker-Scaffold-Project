import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useExpense } from '../context/ExpenseContext'


const AddExpense = () => {
    /*=================================================
            INIT
    =================================================*/
    const { addExpense } = useExpense()
    const navigate = useNavigate()
    
    
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('food')
    const [date, setDate] = useState('')



    /*=================================================
            SUBMITBTN
    =================================================*/
    const handleSubmit = () => {
        if(!title.trim() || !amount || !date) return

        
        addExpense({
            id: Date.now(),
            title,
            amount: Number(amount),
            category,
            date
        })

        navigate('/')
    }


    /*=================================================
            UI
    =================================================*/
    return(
        <div>
            <h2>Add Expense</h2>

            <input 
            placeholder='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <input
            placeholder='amount'
            type='number'
            value={amount}
            onChange={e => setAmount(e.target.value)}
            />

            <select value={category} onChange={e => setCategory(e.target.value)}>
                <option value='food'>Food</option>
                <option value='transport'>Transport</option>
                <option value='shopping'>Shopping</option>
                <option value='other'>Other</option>
            </select>
            
            <input 
            type='date'
            value={date}
            onChange={e => setDate(e.target.value)}
            />


            <button onClick={handleSubmit}>+ Add</button>
            <button onClick={() => navigate(-1)}>Cancel</button>
        </div>
    )
    
}



export default AddExpense