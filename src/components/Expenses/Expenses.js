import './ExpenseDate.css'
import './ExpenseItem.css'
import './Expenses.css'
import ExpenseDate from './ExpenseDate'
import ExpenseItem from './ExpenseItem'

export default function Expenses(props){
    return (
        <>
        <div className='expenses'>
            <ExpenseItem
                title={props.title}
                amount={props.amount}
                date={props.date}
            />
        </div>
        </>
    )
}