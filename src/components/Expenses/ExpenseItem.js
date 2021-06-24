import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


const ExpenseItem = (props) =>  {

   const changeTitleHandler = () =>
    {
       console.log("entered!")
       // const [title, setTitle] = useState(props.title);
       
    }

    
    return (
        <div>
            <div className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                </div>
                <div className="expense-item__price">
                    <h2>{props.amount}</h2>
                </div>
                {/* <button onClick={changeTitleHandler}>Change Title</button> */}
                
            </div>

        </div>
   
    );
        
    }
export default ExpenseItem; 
