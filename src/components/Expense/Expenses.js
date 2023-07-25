import ExpensesFilter from "./ExpenseForm/ExpensesFilter";
import ExpenseList from "./ExpenseList"
import Card from "../UI/Card";
import './Expenses.css'
import { useState } from "react";


export default function Expenses(props) {

  const [changeFilter, setChangeFilter] = useState("2020")

  const filterChangeHandler = (choiceYear) => {
    setChangeFilter(choiceYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === changeFilter
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={changeFilter}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseList
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
  </div>
  )
}

  