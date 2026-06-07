import { useParams,useNavigate } from 'react-router-dom'
import { useExpense } from '../context/ExpenseContext'


const Detail = () => {
    /*=======================================
            INIT
    =======================================*/
    const { expenses } = useExpense()
    const { id } = useParams()
    const NumberId = Number(id)
    const navigate = useNavigate()
    const detail = expenses.find(e => e.id === NumberId)

    
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
                <li>error, {NumberId} not found</li>
            )}</ul>
            <button onClick={() => navigate(-1)}>Cancel</button>
        </div>
    )
}


export default Detail