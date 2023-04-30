import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("pt-BR", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <br />
      <div className="expense-date__year">{year}</div>
      <br />
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
