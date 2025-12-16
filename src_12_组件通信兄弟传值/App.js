/*  
 组件传值
  3.兄弟组件通信
  借助“状态提升”机制，通过父组件进行兄弟组件之间的数据传递
  3.1 A组件先通过 子传父 的方式把数据传给父组件App
  3.2 App拿到数据后通过 父传子 的方式再传递给B组件
*/
import { useState } from 'react'
function SonA(props) {
  const sonMsg = 'this is sonA'
  return (
    <div>
      <button onClick={() => props.onGetMsg(sonMsg)}>点我给父组件传数据</button>
    </div>
  )
}

function SonB(props) {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
}

function App() {
  const [msg, setAMsg] = useState('')
  const getAMsg = (msg) => {
    setAMsg(msg)
  }

  return (
    < div className="App" >
      this is father
      <SonA onGetMsg={getAMsg} />
      <SonB name={msg} />
    </div>
  );
}
export default App;
