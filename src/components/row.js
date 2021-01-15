import React from 'react';
import ColorPallete from './colorpallete';
import MatchPoint from './matchpoint';
const EachRow = (props) => {
  const {
    colorPalleteQuantity,
    matchQuantity,
    onClickSelectColor,
    datakey,
    color,
    onClickButton,
    matchObj,
    key,
  } = props;
  const colorPalleteGen = () => {
    //UTIL FUNCTION
    let coloPallete = [];

    for (let i = 0; i < colorPalleteQuantity; i++) {
      coloPallete.push(
        <ColorPallete
          colorCode={color[i]}
          colorIndex={i}
          size={'round'}
          key={'rowpalter' + i}
          onClickSelectColor={onClickSelectColor}
        />
      );
    }
    return coloPallete;
  };
  const matchgenerator = () => {
    let matchBoard = [];
    for (let i = 0; i < matchQuantity; i++) {
      matchBoard.push(
        <MatchPoint matchState={matchObj[i]} key={`str${key}${i}`} />
      );
    }
    return matchBoard;
  };

  return (
    <div className="row-container" data-indexno={datakey} key={key}>
      {colorPalleteGen()}
      <button
        onClick={onClickButton}
        disabled={Object.keys(color).length !== 4}
      >
        sbmt
      </button>
      <div className="matchOuterContainer">{matchgenerator()}</div>
    </div>
  );
};
export default React.memo(EachRow);
//TO stop waste rendering
