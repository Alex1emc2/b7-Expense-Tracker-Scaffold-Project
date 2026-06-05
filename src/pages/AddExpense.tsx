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
            amount: Number,
            category,
            date 
        })
    }


    /*=======================================
            UI
    =======================================*/
    return (
        <div>
            <input 
            placeholder='title'
            type='text'
            value={title}
            />
        </div>
    )


}


export default AddExpense