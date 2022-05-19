import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  /*
    SINGLE STATE STATEMENT  
    const [userInput, setUserInput] = useState({
    inputTitle: "",
    inputAmount: "",
    inputDate: "",
  }); */

  const titleChangeHandler = (event) => {
    /* setUserInput(prevState =>{
        return {...prevState, inputTitle: event.target.value}
    }); */
    setInputTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    /* setUserInput((prevState) => {
      return { ...prevState, inputAmount: event.target.value };
    }); */
    setInputAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    /*     setUserInput((prevState) => {
      return { ...prevState, inputDate: event.target.value };
    }); */
    setInputDate(event.target.value);
  };
  //console.log(userInput)

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    props.onSaveExpenseData(expenseData);

    setInputTitle("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Titulo</label>
          <input type="text" value={inputTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Valor</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Data</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancelar
        </button>
        <button type="submit">Adicionar despesa</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
