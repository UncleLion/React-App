import React, {useState} from "react";

import './ExpenseForm.css'
export default function ExpenseForm() {

    const [newTitle, setNewTitle] = useState(' ')
    const titleChangeHandler = (event) => {
        setNewTitle(event.target.value)
    }
     const [newAmount, setNewAmount] = useState(' ')
    const amountChangeHandler = (event) => {
        setNewAmount(event.target.value)
    }
    const [newDate, setNewDate] = useState(' ')
    const dateChangeHandler = (event) => {
        setNewDate(event.target.value)
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2018-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
    </form>
    )
}