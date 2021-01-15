import React from 'react';
const MatchPoint = (props) => {
  const { matchState, key } = props;
  const checkState =
    matchState === 'CROSS'
      ? 'crossstate'
      : matchState === 'DOT'
      ? 'dot-fill'
      : 'empty-fill';

  return (
    <div className="match-container" key={key}>
      <div className={checkState}></div>
    </div>
  );
};
export default React.memo(MatchPoint);
//TO stop waste rendering
