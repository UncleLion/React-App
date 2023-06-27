import ExpenseList from "./ExpenseList"
import './Expenses.css'


function Expenses(props) {
  return <div>
      <h2>Tilki ne sogodni</h2>
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
    </div>
}
  
export default Expenses;