import './App.css';
import React from 'react';
import ColorPallete from './components/colorpallete';
import EachRow from './components/row';
import data from './contants.json';

function ParentApp() {
  //Color array and quantity constant
  const colorQuan = data.colorQuan;
  const pattern = data.pattern;
  const colorARR = data.colorARR;

  //state for selctedcolor,rowrecord,matchrecord and button index
  //sepharate state to maintain and increase readability
  const [state, setState] = React.useState({
    selectedColor: colorARR[0],
    rowState: [],
    matchRow: [],
    submitIndex: [],
  });

  //updating the selected color here
  const onclickColorSlector = (evt) => {
    console.log(evt.currentTarget.dataset.colorcode);
    if (evt.currentTarget.dataset.colorcode === undefined) {
      let rowindex = evt.currentTarget.parentElement.dataset.indexno;
      let colorIndex = evt.currentTarget.dataset.colorindex;
      let rowStateTemp = [...state.rowState];
      rowStateTemp[rowindex] = {
        ...rowStateTemp[rowindex],
        [colorIndex]: state.selectedColor,
      };
      setState({
        ...state,
        rowState: rowStateTemp,
      });
    } else {
      setState({
        ...state,
        selectedColor: evt.currentTarget.dataset.colorcode,
      });
    }
  };
  //generating the component through loop
  const colorPalleteGen = () => {
    let coloPallete = [];
    for (let i = 0; i < colorQuan; i++) {
      coloPallete.push(
        <ColorPallete
          colorCode={colorARR[i]}
          colorIndex={i}
          key={'sidebar' + i}
          size={'round'}
          onClickSelectColor={onclickColorSlector}
        />
      );
    }
    return coloPallete;
  };
  const clickButtonhadler = (evt) => {
    const { rowState } = state;
    let rowIndex = evt.currentTarget.parentElement.dataset.indexno;
    let arrKeys = Object.keys(rowState[rowIndex]);
    let dictObj = {};
    for (let i = 0; i < arrKeys.length; i++) {
      dictObj[rowState[rowIndex][i]] = i;
    }
    var matchObj = {};
    for (let i = 0; i < pattern.length; i++) {
      switch (true) {
        case pattern[i] === rowState[rowIndex][i]:
          matchObj[i] = 'DOT';
          break;
        case dictObj[pattern[i]] !== undefined:
          matchObj[i] = 'WHITE';
          break;

        default:
          matchObj[i] = 'CROSS';
      }
    }
    let matchRowTemp = state.matchRow;
    matchRowTemp[rowIndex] = matchObj;
    setState({
      ...state,
      matchRow: matchRowTemp,
    });
  };
  const rowGemerator = () => {
    let rowArr = [];

    for (let i = 0; i < 10; i++) {
      let color = state.rowState[i] || [];
      rowArr.push(
        <EachRow
          datakey={i}
          colorPalleteQuantity={4}
          matchQuantity={'4'}
          onClickSelectColor={onclickColorSlector}
          color={color}
          onClickButton={clickButtonhadler}
          matchObj={state.matchRow[i] || {}}
          key={'str' + i}
        />
      );
    }
    return rowArr;
  };
  return (
    <div className="container">
      <div className="left-side-pallete-bar">{rowGemerator()}</div>
      <div className="right-side-pallete-bar">{colorPalleteGen()}</div>
    </div>
  );
}

export default ParentApp;
