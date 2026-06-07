import { useExpense } from '../context/ExpenseContext'
import { useNavigate, Link } from 'react-router-dom'


const Home = () => {
    /*=======================================
            INIT
    =======================================*/
    const { expenses, deleteExpense } = useExpense()
    const navigate = useNavigate()

    const total = expenses.reduce((sum, e) => sum + e.amount, 0).toLocaleString()

    
    /*=======================================
            UI
    =======================================*/
    return (
        <div>
            <h2 style={{ color:'darkblue' }}>EXPENSE TRACKER 2.0</h2>
            <p>TOTAL:
                <select>
                    <option>$</option>
                    <option>Rp</option>
                    <option>Btc</option>
                    <option>Euro</option>
                </select> {total}</p>
            <button onClick={() => navigate('/add')}>Add Expense</button>


            <ul>{expenses.map(e => (
                <li key={e.id}>
                    <Link to={`/detail/${e.id}`}>{e.title}</Link>

                    {' | '} {e.amount}
                    {' - '} {e.category}

                    <button onClick={() => deleteExpense(e.id)}>X</button>
                </li>
            ))}</ul>
        </div>
    )
}


export default Home