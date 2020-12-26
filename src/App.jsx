import React, { useEffect, useState } from "react";
import ColorfulMessage from './components/ColorfulMessage'

const App = () => {
  console.log('最初')
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true)

  const onClickCountUp = () => {
    setNum(num + 1);
  }
  const onClickCountDown = () => {
    setNum(num -1)
  }

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag)
  }

  useEffect(() => {
      if (num % 3 === 0) {
    // faceShowFlagがfalseの場合に右側の処理をする
    faceShowFlag || setFaceShowFlag(true)
  } else {
    // faceShowFlagがtrueの場合に右側の処理をする
    faceShowFlag && setFaceShowFlag(false)
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      {/* <ColorfulMessage color="blue" message="お元気ですか？" />
      <ColorfulMessage color="pink" message="元気です！" /> */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickCountDown}>カウントダウン</button>
      <hr></hr>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {/* faceShowFlagがtrueの場合に右の要素を返す */}
      {faceShowFlag && <p>( ✌︎'ω')✌︎</p>}

    </>
  );
};

export default App;
