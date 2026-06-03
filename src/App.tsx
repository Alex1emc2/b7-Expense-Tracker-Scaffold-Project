import { Routes, Route } from 'react-router-dom'
import { ExpenseProvider } from './context/ExpenseContext'
import Home from './pages/Home'
import Detail from './pages/Detail'
import AddExpense from './pages/AddExpense'


const App = () => (
    <ExpenseProvider>
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/detail' element={ <Detail/> } />
            <Route path='/add' element={ <AddExpense/> } />
        </Routes>
    </ExpenseProvider>
)


export default App