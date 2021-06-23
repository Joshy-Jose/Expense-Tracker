import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


const ExpenseItem = (props) =>  {
    
   const [title, setTitle] = useState(props.title);

   const changeTitleHandler = () =>
    {
      setTitle('updated!!');
    }

    
    return (
        <div className="expense-item">

            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">
                <h2>{props.amount}</h2>
            </div>
            <button onClick={changeTitleHandler}>Change Title</button>
        </div>
    );
        
    }
export default ExpenseItem; 
