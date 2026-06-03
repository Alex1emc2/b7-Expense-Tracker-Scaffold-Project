import { Link, useNavigate } from "react-router-dom"
import { useExpense } from "../context/ExpenseContext"


const Home = () => {
    /*=================================================
            INIT
    =================================================*/
    const { expenses, deleteExpense } = useExpense()
    const navigate = useNavigate()

    const total = expenses((sum, e) => sum + e.amount, 0)


    /*=================================================
            UI
    =================================================*/
    return (
        <div>
            <h2>Home - List Expense</h2>
            <p>Total: Rp {total.toLocaleString()}</p>

            
            <button onClick={() => navigate('/add')}>Add Expense</button>


            <ul>
                {expenses.map(e => (
                    <li key={e.id}>
                        <Link to={'/detail/${e.id}'}>{e.title}</Link>
                        {' - '}Rp {e.amount.toLocaleString()}
                        {' | '}{e.category}
                        <button onClick={() => deleteExpense(e.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home