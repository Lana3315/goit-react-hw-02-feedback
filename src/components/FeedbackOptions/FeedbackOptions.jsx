import React from "react";

export const FeedbackOptions = ({ onHandleGood, onHandleNeutral, onHandleBad }) => {
  return (

    <section>
      <h1>Please leave Feedback</h1>
      <ul>
        <li><button onClick={onHandleGood}
        >Good</button></li>
        <li><button onClick={onHandleNeutral}
        >Neutral</button></li>
        <li><button onClick={onHandleBad}
        >Bad</button></li>
      </ul>
    </section>
  )
}
export default FeedbackOptions;