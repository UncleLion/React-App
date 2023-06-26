import ExtenseList from "./components/ExpenseList";

function App() {
  const expensesInfo = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Tilki ne sogodni</h2>
      <ExtenseList
        title={expensesInfo[0].title}
        amount={expensesInfo[0].amount}
        date={expensesInfo[0].date}
      />
      <ExtenseList
        title={expensesInfo[1].title}
        amount={expensesInfo[1].amount}
        date={expensesInfo[1].date}
      />
      <ExtenseList
        title={expensesInfo[2].title}
        amount={expensesInfo[2].amount}
        date={expensesInfo[2].date}
      />
      <ExtenseList
        title={expensesInfo[3].title}
        amount={expensesInfo[3].amount}
        date={expensesInfo[3].date}
      />
    </div>
  );
}

export default App;
