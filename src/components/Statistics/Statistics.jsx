import PropTypes from 'prop-types';

export const Statistics = ({good,neutral,bad, positivePercentage}) => {
    return (
      <section>
        <h2>Statistics</h2>
        <ul>
          <li><p>Good: <span>{good}</span></p></li>
      
          <li><p>Neutral: <span>{neutral}</span></p></li>
          <li><p>Bad: <span>{bad}</span></p></li>
        </ul>
        <p>Positive Feedback: <span>{positivePercentage }%</span></p>
      </section>
    )
  }

 Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;