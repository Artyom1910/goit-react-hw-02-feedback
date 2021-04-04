import PropTypes from 'prop-types';
import Notification from '../Notification';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, Percentage }) => (
  <div className={styles.Statistics}>
    {total > 0 ? (
      <>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>Total: {total}</span>
        <span>Positive feedback: {Percentage}%</span>
      </>
    ) : (
      <Notification text="No feedback given" />
    )}
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  Percentage: PropTypes.number.isRequired,
};

export default Statistics;