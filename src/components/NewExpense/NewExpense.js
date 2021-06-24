import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {
    const saveExpenseData = (enteredExpenseData) => {

        const expenseData = {

            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpenseHandler(expenseData);
    }
    return (

        <div className = "new-expense" >
            <ExpenseForm onSaveExpenseData = {saveExpenseData }
            /> 
        </div>
    );

}

export default NewExpense;

//onSaveExpenseData is a function pointer pass saveExpenseData which is exicuted in child component and return enteredExpenseData as an argument