import React from 'react';
import StatisticLine from './StatisticLine';

const Statistics = ({ count, goodPoints, badPoints, neutralPoints }) => {
  const average = () => {
    return (goodPoints + badPoints) / count;
  };

  const positive = () => {
    return (goodPoints / count) * 100 + ' %';
  };

  const feedback = (
    <tbody>
      <StatisticLine text="good:" value={goodPoints} />
      <StatisticLine text="neutral:" value={neutralPoints} />
      <StatisticLine text="bad:" value={badPoints * -1} />
      <StatisticLine text="count:" value={count} />
      <StatisticLine text="average:" value={average()} />
      <StatisticLine text="positive:" value={positive()} />
    </tbody>
  );

  return (
    <>
      <h2>statistics</h2>
      <table>
        {count === 0 ? (
          <tbody>
            <tr>
              <td>No feedback given</td>
            </tr>
          </tbody>
        ) : (
          feedback
        )}
      </table>
    </>
  );
};

export default Statistics;
