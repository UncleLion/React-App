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
      <ExpensesFilter  selected={changeFilter} onChangeFilter={filterChangeHandler} />
      <ExpenseList
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseList
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseList
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseList
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        />
      </Card>
  </div>
  )
}

  