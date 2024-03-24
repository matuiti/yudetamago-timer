// import { useState, useEffect } from "react"
import Hannjuku from "./components/Hannjuku"
import Katayude from "./components/Katayude"
import Onnsenn from "./components/Onnsenn"

const Timers = () => {
  // 初期値として各種ゆで方の時間を設定します（秒数で表記）
  const initialTimers = {
    katayude: 720, // 硬ゆで（12分）
    hannjuku: 480, // 半熟  （8分）
    onnsenn:  720, // 温泉卵（12分）
  }

  // const [timer, setTimer] = useState(initialTimers.katayude)
  // const [isRunning, setIsRunning] = useState(false)
  // const [isStartButtonVisible, setIsStartButtonVisible] = useState(true)
  const zeroPad = (num) => (num < 10 ? "0" + num : num)

  // タイマーの表示形式を作成する関数
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${zeroPad(minutes)}:${zeroPad(remainingSeconds)}`
  }

  // カウントダウンロジックを実装する関数
  // const countdown = () => {
  //   if (timer > 0) {
  //     setTimer(timer - 1)
  //   } else {
  //     // タイマーが0になったら音を鳴らしてカウントを初期値に戻す
  //     new Audio("/bell.mp3").play()
  //     setTimer(initialTimers.katayude)
  //     setIsRunning(false)
  //     setIsStartButtonVisible(true) // リセット時にスタートボタンを表示
  //   }
  // }

  // タイマーが動作中の場合、1秒ごとにカウントダウン関数を呼び出す
  // useEffect(() => {
  //   let timerId
  //   if (isRunning) {
  //     timerId = setInterval(countdown, 1000)
  //     setIsStartButtonVisible(false) // タイマーが開始されたらスタートボタンを非表示
  //   } else {
  //     clearInterval(timerId)
  //   }
  //   return () => clearInterval(timerId)
  // }, [isRunning, timer])

  // スタート/リセットボタンを切り替える関数
  // const toggleButton = (initialTime) => {
  //   if (!isRunning) {
  //     setIsRunning(true)
  //   } else {
  //     setTimer(initialTime)
  //     setIsRunning(false)
  //     setIsStartButtonVisible(true) // リセット時にスタートボタンを表示
  //   }
  // }

  return (
    <ul style={{ display: "flex", flexDirection: "column",rowGap:"36px",padding:"100px 0"}}>
      <Katayude initialTime={initialTimers.katayude} formatTime={formatTime} />
      <Hannjuku initialTime={initialTimers.hannjuku} formatTime={formatTime} />
      <Onnsenn  initialTime={initialTimers.onnsenn } formatTime={formatTime} />
      
      {/* <li style={{ display: "flex", justifyContent:"space-between"}}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="public\images\onnsenn@2x.png" style={{width:"81px"}}
          />
        </div>
        <div
          style={{
            color: "#492C15",
            fontSize: "56px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {formatTime(timer)}
        </div>
        <div style={{ display: "flex" }}>
          <button
            style={{
              margin: "auto",
              width: "75px",
              height: "75px",
              backgroundColor: "#FF774E",
              borderRadius: "50%",
              fontSize: "14px",
              color: "#FFFFFF",
            }}
            onClick={toggleButton}
            disabled={timer <= 0 && !isRunning}
          >
            {isStartButtonVisible ? "スタート" : "リセット"}
          </button>
        </div>
      </li> */}
    </ul>
  )
}

export default Timers
