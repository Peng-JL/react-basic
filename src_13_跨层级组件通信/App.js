/*  
 组件传值
  4.使用Context机制跨层级组件通信（可以是父子或者爷孙，只要是形成了顶层和底层的逻辑关系）
    4.1 使用createContext方法创建一个上下文对象Ctx
    4.2 在顶层组件（App）中通过 Ctx.Provider 组件提供数据
    4.3 在底层组件（B）中通过useContext钩子函数获取消费数据
*/
import { createContext } from "react"
import { useContext } from "react"
const MsgContent = createContext()
function SonA(props) {
  return (
    <div>
      this is father
      <SonB />
    </div>
  )
}

function SonB(props) {
  const msg = useContext(MsgContent)
  return (
    <div>
      this is son,{msg}
    </div>
  )
}

function App() {
  const msg = "hello world"
  return (
    <div>
      <MsgContent.Provider value={msg}>
        this is grandparent
        <SonA />
      </MsgContent.Provider>
    </div>
  );
}
export default App;
