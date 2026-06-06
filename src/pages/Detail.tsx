import { useParams,useNavigate } from 'react-router-dom'
import { useExpense } from '../context/ExpenseContext'


const Detail = () => {
    /*=======================================
            INIT
    =======================================*/
    const { expenses } = useExpense()
    const { id } = useParams<Number>()
    const navigate = useNavigate()
    const detail = expenses.filter(e => e.id !== id)

    
    /*=======================================
            UI
    =======================================*/
    return (
        <div>
            <h2>Detail Page</h2>
            <p>Detail Expense id: {id}</p>
            <ul>{detail ? (
                <li>
                    <p>title: {detail.title}</p>
                    <p>amount: {detail.amount}</p>
                    <p>category: {detail.category}</p>
                    <p>date: {detail.date}</p>
                </li>
            ): (
                <li>error, {id} not found</li>
            )}</ul>
            <button onClick={() => navigate(-1)}>Cancel</button>
        </div>
    )
}


export default Detail