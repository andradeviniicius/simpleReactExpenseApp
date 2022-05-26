import './ExpenseDate.css'
import './ExpenseItem.css'
import './Expenses.css'
import ExpenseDate from './ExpenseDate'
import ExpenseItem from './ExpenseItem'

export default function Expenses(props){
const list = props.listOfItems

    return (
        <>
        <div className='expenses'>
            {list.map((e)=>{
                return <ExpenseItem
                    title={e.title}
                    amount={e.amount}
                    date={e.date}
                />
            })}
        </div>
        </>
    )
}