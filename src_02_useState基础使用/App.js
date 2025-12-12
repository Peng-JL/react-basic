import { useState } from "react";
function App() {
  // 1.调用useState添加一个状态变量
  // count 状态变量
  // setCount 与之绑定的修改状态变量的方法
  const [count, setCount] = useState(0)

  // 2.点击事件回调
  const handleClick = () =>{
    // 作用：
    // 用传入的新值修改count
    // 重新使用新的count渲染UI（数据驱动视图）
    setCount(count+1)
  }
  return (
    < div className="App" >
      <button onClick={handleClick}>点击加一：{count}</button>
    </div>
  );
}
export default App;
