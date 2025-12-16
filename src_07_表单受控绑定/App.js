import { useState } from "react";
function App() {
  /*  
   表单受控绑定：使用react组件的状态（useState）控制表单的状态
    1.声明一个react状态——useState
    2.核心的绑定流程
      2.1 通过value属性绑定react状态
      2.2 通过onChange事件参数e拿到输入框最新的值，反向修改react状态
 */
  const [value, setValue] = useState("");
  return (
    < div className="App" >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
    </div>
  );
}
export default App;
