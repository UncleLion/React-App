import ExpensesFilter from "./ExpenseForm/ExpensesFilter";
import ExpenseList from "./ExpenseList"
import Card from "../UI/Card";
import './Expenses.css'
import { useState } from "react";


export default function Expenses(props) {

  const [changeFilter, setChangeFilter] = useState("2020")
  const filterChangeHandler = choiceYear => {
    setChangeFilter(choiceYear)
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selecte={changeFilter} onChangeFilter={filterChangeHandler} />
        {props.items.map((expense) => (
          <ExpenseList
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
  </div>
  )
}

  