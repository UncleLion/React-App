import "./ExpenseList.css"

export default function ExtenseList() {
    const expenseDate = new Date(2023, 8, 15 )
    const expenseTitle = 'Car Insurance'
    const expenceAmount = 154.61
    return (
        <div className="expense-list">
            <div>
                {expenseDate.toISOString()}
            </div>
            <div className="expense-list__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-list__price">${expenceAmount}</div>
            </div>
        </div>
    )
}