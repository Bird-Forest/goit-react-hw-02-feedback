import React from 'react';
import PropTypes from 'prop-types';
import {
  StatList,
  StatItem,
  StatResult,
  LastItem,
} from './StatisticsFB.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return (
    <StatList>
      <li>
        <StatItem>
          Good: <StatResult>{good}</StatResult>
        </StatItem>
      </li>
      <li>
        <StatItem>
          Neutral: <StatResult>{neutral}</StatResult>
        </StatItem>
      </li>
      <li>
        <StatItem>
          Bad: <StatResult>{bad}</StatResult>
        </StatItem>
      </li>
      <li>
        <StatItem>
          Total: <StatResult>{total}</StatResult>
        </StatItem>
      </li>
      <li>
        <LastItem>
          Positive feedback: <StatResult>{positivePercentage}%</StatResult>
        </LastItem>
      </li>
    </StatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};
