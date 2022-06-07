import React from "react";
import "./ExpenseDate.css";
import "./ExpenseItem.css";
import "./Expenses.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";

export default function Expenses(props) {

  function getDataFromFilter(data) {
    console.log(".");
    console.log("data from expensesFilter");
    console.log(data);
    console.log("data from expensesFilter");
    console.log(".");
  }

  return (
    <>
      <ExpensesFilter liftingFilterData={getDataFromFilter} />
      <div className="expenses">
        {props.listOfItems.map((e) => {
          return (
            <Card>
              <ExpenseItem title={e.title} amount={e.amount} date={e.date} />
            </Card>
          );
        })}
      </div>
    </>
  );
}
