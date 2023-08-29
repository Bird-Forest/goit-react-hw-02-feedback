import PropTypes from 'prop-types';
import { Wrapper, Button } from './ButtonFB.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Wrapper>
      {options.map(option => {
        return (
          <li key={option}>
            <Button
              type="button"
              key={option}
              value={option}
              children={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Button>
          </li>
        );
      })}
    </Wrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func,
};
