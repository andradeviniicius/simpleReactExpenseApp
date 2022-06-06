import React from 'react'
import './ExpenseDate.css'
import './ExpenseItem.css'
import './Expenses.css'
import ExpenseDate from './ExpenseDate'
import ExpenseItem from './ExpenseItem'
import NewExpense from './../NewExpense/NewExpense'
import Card from '../UI/Card'

export default function Expenses(props){
    return (
        <>
        <NewExpense></NewExpense>
        <div className='expenses'>
            {props.listOfItems.map((e)=>{
                return (
                    <Card>
                        <ExpenseItem
                            title={e.title}
                            amount={e.amount}
                            date={e.date}
                        />
                    </Card>
                ) 
            })}
        </div>
        </>
    )
}