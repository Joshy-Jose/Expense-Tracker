import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {

    const [isEditing,setEditing] = useState(false)

    const saveExpenseData = (enteredExpenseData) => {

        const expenseData = {

            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpenseHandler(expenseData);
        setEditing(false);
    }

    const startEditingHandler = () =>
    {
        setEditing(true);
    }
    const stopEditingHandler = () =>
    {
        setEditing(false);
    }
    return (

        <div className = "new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseData} onCancel={stopEditingHandler}/>}  
        </div>
    );

}

export default NewExpense;

//onSaveExpenseData is a function pointer pass saveExpenseData which is exicuted in child component and return enteredExpenseData as an argument