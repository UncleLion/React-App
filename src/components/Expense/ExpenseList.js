import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate"
import "./ExpenseList.css"

export default function ExpenseList(props) {
    const clickHandler = () => {
        console.log('It`s Working')
        ("Welcome")
    }

    return (
        <Card className="expense-list"> 
            <ExpenseDate  date={props.date}/>
            <div className="expense-list__description">
                <h2>{props.title}</h2>
                <div className="expense-list__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler} >Press me</button>
        </Card>
    )
}

// Альтернативний варіант використання пропсів

// export default function ExtenseList({props}) {

// add dynamic date + clear code watch up 1

//     return (
//         <div className="expense-list">
//             <div>
//                 {date.toISOString()}
//             </div>
//             <div className="expense-list__description">
//                 <h2>{title}</h2>
//                 <div className="expense-list__price">${amount}</div>
//             </div>
//         </div>
//     )
// }