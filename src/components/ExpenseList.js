import "./ExpenseList.css"

export default function ExtenseList(props) {
    return (
        <div className="expense-list">
            <div>
                {props.date.toISOString()}
            </div>
            <div className="expense-list__description">
                <h2>{props.title}</h2>
                <div className="expense-list__price">${props.amount}</div>
            </div>
        </div>
    )
}

// Альтернативний варіант використання пропсів

// export default function ExtenseList(props) {
//     return (
//         <div className="expense-list">
//             <div>
//                 {props.date.toISOString()}
//             </div>
//             <div className="expense-list__description">
//                 <h2>{props.title}</h2>
//                 <div className="expense-list__price">${props.amount}</div>
//             </div>
//         </div>
//     )
// }