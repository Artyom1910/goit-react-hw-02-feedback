import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        const addressFeedback = () => onLeaveFeedback(option);
        return (
          <button className={styles.button}
            key={option}
            type="button"
            onClick={addressFeedback}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;