import React from 'react';
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";


const ExpensesList = (props) =>
{
    console.log(props);
    let expenseContent = <p>No Expense Found</p>;
    if(props.items.length === 0)
    {
        return <h2 className="xpenses-list__fallback">Found no expenses</h2>
    }
 

    return(
        <ul className="expenses-list">
            { props.items.map((expense) => (       // && => first condition is met(filteredExpenses.length === 0) it move to second condition(No Expense Found) and retun value
            <ExpenseItem
            key={expense.id}                        //unique id which helps react identify each item,provide better performance,prevenet updation of all item
            title = {expense.title}
            amount = {expense.amount}
            date = {expense.date}
            />
     ))
                
        }


        </ul>
    );

}

export default ExpensesList;