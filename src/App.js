import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expense = [
    { 
      id: "e1",
      title: "Car insurance",
      amount: 254.88,
      date: new Date(2023, 2, 28)
    },
    { 
      id: "e2",
      title: "Home insurance",
      amount: 22.46,
      date: new Date(2021, 4, 28)
    },
    { 
      id: "e3",
      title: "Health insurance",
      amount: 4454.43,
      date: new Date(2023, 2, 28)
    },
    { 
      id: "e4",
      title: "Food",
      amount: 214.32,
      date: new Date(2021, 6, 28)
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date}></ExpenseItem>
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date}></ExpenseItem>
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date}></ExpenseItem>
      <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
