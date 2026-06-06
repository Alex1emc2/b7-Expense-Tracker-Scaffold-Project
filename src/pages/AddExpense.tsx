import { useExpense } from '../context/ExpenseContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const AddExpense = () => {
    /*=======================================
            INIT
    =======================================*/
    const { addExpense } = useExpense()
    const navigate = useNavigate()


    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('food') 
    const [date, setDate] = useState('')


    /*=======================================
            HANDLE SUBMIT BTN
    =======================================*/
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


    /*=======================================
            UI
    =======================================*/
    return (
        <div style={{ height:'100vh', width:'500vh' }}>
            <input 
            placeholder='title'
            type='text'
            value={title}
            onChange={e => setTitle(e.target.value)}
            />

            <input
            placeholder='amount'
            type='number'
            value={amount}
            onChange={e => setAmount(e.target.value)}
            />

            <select value={category} onChange={e => setCategory(e.target.value)}>
                <option>food</option>
                <option>transportation</option>
                <option>shopping</option>
                <option>study</option>
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