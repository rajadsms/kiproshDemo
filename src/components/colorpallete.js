import React from 'react';
const ColorPallete = (props) => {
  const { colorCode, size, onClickSelectColor, colorIndex, key } = props;
  const sizeClass = size === 'round' ? 'circle' : 'square';

  return (
    <>
      <div
        className={'pallate-container ' + sizeClass}
        onClick={onClickSelectColor}
        data-colorcode={colorCode}
        data-colorindex={colorIndex}
        key={key}
      >
        <div className="colorfill" style={{ backgroundColor: colorCode }}></div>
      </div>
    </>
  );
};
export default React.memo(ColorPallete);
//TO stop waste rendering
