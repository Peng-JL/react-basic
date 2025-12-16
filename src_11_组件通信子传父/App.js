/*  
 组件传值
  2.子传父
  核心思路是在子组件中调用父组件中的函数并传递参数
*/
import { useState } from 'react'
function Son(props) {
  const sonMsg = 'this is son msg'
  return (
    <div>
      <button onClick={() => props.onGetMsg(sonMsg)}>
        send
      </button>
    </div>
  )
}

function App() {
  const [msg, setMsg] = useState('')
  const getMsg = (msg) => {
    console.log(msg)
    setMsg(msg)
  }
  return (
    < div className="App" >
      <p>{msg}</p>
      <Son onGetMsg={getMsg}>
      </Son>
    </div>
  );
}
export default App;
