/*
自定义Hook函数
  自定义Hook是以 use 打头的函数，通过自定义Hook函数可以用来实现逻辑的封装和复用

封装自定义hook通用思路
1. 声明一个以use打头的函数
2. 在函数体内封装可复用的逻辑（只要是可复用的逻辑）
3. 把组件中用到的状态或者回调return出去（以对象或者数组）
4. 在哪个组件中要用到这个逻辑，就执行这个函数，解构出来状态和回调进行使用

ReactHooks使用规则
1. 只能在组件中或者其他自定义Hook函数中调用
2. 只能在组件的顶层调用，不能嵌套在 if、for、其他函数中
错误示例：
----------------------------------------
错误1：Hook不能在组件/自定义Hook外调用
import { useState } from "react"
// 直接在全局作用域调用useState
const [count, setCount] = useState(0)
function App() {
  return <div>{count}</div>
}
----------------------------------------
错误2：Hook不能嵌套在if/for等语句中
import { useState } from "react"
function App() {
  if (true) {
    // 在if内部调用useState，违反“顶层调用”规则
    const [count, setCount] = useState(0)
  }
  return <div>this is app</div>
}
----------------------------------------
*/
import { useState } from "react"
// 问题：布尔切换的逻辑 当前组件耦合在一起的 不方便复用
// 解决思路：自定义hook 
function useToggle() {
  // 可复用的逻辑代码
  const [value, setValue] = useState(true)
  const toggle = () => setValue(!value)
  // 哪些状态和回调函数需要在其他组件中使用 return
  return {
    value,
    toggle
  }
}
function App() {
  const { value, toggle } = useToggle()
  return (
    <div>
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  )
}

export default App