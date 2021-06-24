import React, {useState} from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) =>
{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput,setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })



    const titleChangeHandler = (event) =>
    {
           setEnteredTitle(event.target.value);                      // spesific state management for fields
        // setUserInput((prevState) => {                             // group state management
        //     return {...prevState,enteredTitle:event.target.value}; // need to compare with previous state and copy all state overwrite the needed one
        // })

    }
    const amountChangeHandler = (event) =>
    {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) =>
    {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();                //prevent re-render when form submission

       const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
       };
       

        props.onSaveExpenseData(expenseData);       //Exicute parent function and pass the expenseData as argument to parent


        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');


    }
 

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type="text" 
                    value={enteredTitle}                                 //value helps to achive 2 way data binding
                    onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='number' 
                    value={enteredAmount}
                    min="0.01" step="0.01"
                    onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date' 
                    value={enteredDate} 
                    min="2021-01-01" 
                    max="2022-12-31" 
                    onChange={dateChangeHandler}/>
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button type="Button" onClick={props.onCancel}>Cancel</button>
            </div> 
        </form>

    );
}

export default ExpenseForm;