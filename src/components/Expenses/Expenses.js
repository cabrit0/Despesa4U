import React, { useState } from "react";
import ExpensesList from "../Expenses/ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChar";

function Expenses(props) {
  //console.log(props);

  const [pickedYear, setPickedYear] = useState("2021");

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === pickedYear
  );

  const filterChangeHandler = (selectedYear) => {
    setPickedYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={pickedYear}
          onYearChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
}
export default Expenses;
