import React from "react";
import css from './FeedBack.module.css'

export const FeedbackOptions = ({ onHandleGood, onHandleNeutral, onHandleBad }) => {
  return (

    <div>
      <ul className={css.btnlist}>
        <li ><button className={css.btn} onClick={onHandleGood}
        >Good</button></li>
        <li ><button  className={css.btn}onClick={onHandleNeutral}
        >Neutral</button></li>
        <li><button className={css.btn} onClick={onHandleBad}
        >Bad</button></li>
      </ul>
    </div>
  )
}
export default FeedbackOptions;