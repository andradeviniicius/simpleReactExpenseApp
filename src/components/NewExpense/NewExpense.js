import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  function dataReceived(data) {
    const expenseData = {
        ...data,
        id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm userInputData={dataReceived} />
    </div>
  );
};

export default NewExpense;
