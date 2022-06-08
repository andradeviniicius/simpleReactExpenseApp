
import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [editing, setEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  function editingClickHandler() {
    setEditing(true);
  }
  function setEditingFalse() {
    setEditing(false);
  }

  return (
    <div className="new-expense">
      {!editing && <button onClick={editingClickHandler}>Add Expense</button>}
      {editing && (
        <ExpenseForm
          onCancelBtnClick={setEditingFalse}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;