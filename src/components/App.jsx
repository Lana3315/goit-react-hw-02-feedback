import React, { Component } from "react";
// import Section from './Section/Section'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Statistics from './Statistics/Statistics'



class App extends Component {
 state = {
  good: 0,
  neutral: 0,
  bad: 0
}
 handleClickGood = () => 
    this.setState((prevState) => ({good: prevState.good + 1,})) 
  
   handleClickNeutral = () => 
    this.setState((prevState) => ({neutral: prevState.neutral + 1,}))  
  
   handleClickBad = () => 
    this.setState((prevState) => ({bad: prevState.bad+ 1,}))  
  
  countTotalFeedBack = () => {
    return Object.values(this.state).reduce((total, curr) => (total + curr))
    
  };

  countPositiveFeedbackPercentage = totalFeedback => {
    const { good } = this.state;

    if (totalFeedback > 0) return Math.round((good / totalFeedback) * 100);
    return 0;
  };
  render() {
    const { good, neutral, bad } = this.state
    const totalFeedBack = this.countTotalFeedBack()
    const positivePercentage =
      this.countPositiveFeedbackPercentage(totalFeedBack);

    return (
      <>
        {/* <Section /> */}
        <FeedbackOptions
          onHandleGood={this.handleClickGood}
          onHandleNeutral={this.handleClickNeutral}
          onHandleBad ={this.handleClickBad}

        />
        

            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedBack}
              positivePercentage={positivePercentage}
            />
         
      </>
    );
  }
}

export default App;