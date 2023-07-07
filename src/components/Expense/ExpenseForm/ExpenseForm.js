import React, {useState} from "react";

import './ExpenseForm.css'
export default function ExpenseForm(props) {

    const [newTitle, setNewTitle] = useState(' ')
    const [newAmount, setNewAmount] = useState(' ')
    const [newDate, setNewDate] = useState(' ')


    const titleChangeHandler = (event) => {
        setNewTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setNewAmount(event.target.value)
    }
    
    const dateChangeHandler = (event) => {
        setNewDate(event.target.value)
    }

    function submitChargeHandler(event) {
        event.preventDefault()
        
        const submitHandler = {
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate)
    }
        props.onSaveExpenseData(submitHandler)
        setNewTitle("")
        setNewAmount("")
        setNewDate("")
    }
    

    return (
        <form onSubmit={submitChargeHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={titleChangeHandler}
                        value={newTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01" step="0.01"
                        onChange={amountChangeHandler}
                        value={newAmount}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2018-01-01" max="2023-12-31"
                        onChange={dateChangeHandler}
                        value={newDate}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
    </form>
    )
}