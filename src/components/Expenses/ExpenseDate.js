import React from 'react'
import './ExpenseDate.css'

export default function ExpenseDate(props){
    const month = props.date.toLocaleString('pt-BR',{month: 'long'})
    const year= props.date.getFullYear()
    const day= props.date.toLocaleString('pt-BR',{day:'2-digit'})
    
    return (
        <div className="expense-date">
            <div class="expense-date__month">{month}</div>
            <div class="expense-date__year">{year}</div>
            <div class="expense-date__day">{day}</div>
        </div>
    )
}