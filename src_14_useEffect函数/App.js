/*
useEffect：
  是一个React Hook函数，用于在React组件中创建不是由事件引起而是由渲染本身引起的操作，比如发送AJAX请求，更改DOM等；
  例如，组件中没有发生任何的用户事件，组件渲染完毕之后就需要和服务器要数据，整个过程属于“只由渲染引起的操作” 
基础使用：
  useEffect(() => {}, [])
  参数1是一个函数，可以把它叫做副作用函数，在函数内部可以放置要执行的操作
  参数2是一个数组（可选参），在数组里放置依赖项，不同依赖项会影响第一个参数函数的执行，当是一个空数组的时候，副作用函数只会在组件渲染完毕之后执行一次
依赖项参数说明：
  没有依赖项：组件初始渲染+组件更新时执行副作用函数
  空数组依赖：只在组件初始渲染时执行一次副作用函数
  添加特定依赖项：组件初始渲染+在特定依赖项改变时执行副作用函数
清除副作用：
  在useEffect中编写的由渲染本身引起的对接组件外部的操作，也经常把它叫做副作用操作
  比如在useEffect中开启了一个定时器，我们想在组件卸载时把这个定时器再清理掉，这个过程就是清理副作用
  清除副作用的函数最常见的执行时机是在组件卸载时自动执行
  useEffect(() => {
    // 实现副作用操作逻辑
    return () => {
      // 清除副作用逻辑
    }
  }, [])
*/
import { useEffect, useState } from "react"


/* 
案例一：useEffect的基础使用
const URL = 'http://geek.itheima.net/v1_0/channels'
function App () {
  // 创建一个状态数据
  const [list, setList] = useState([])
  useEffect(() => {
    // 额外的操作 获取频道列表
    // 函数内部声明函数完全合法，是 JS 核心特性；
    // 这么写，规避了“useEffect 回调不能直接 async”的限制；
    // 额外还能利用闭包，让内部函数访问外层的变量/方法，逻辑更紧凑。
    async function getList () {
      const res = await fetch(URL)
      const jsonRes = await res.json()
      console.log(jsonRes)
      setList(jsonRes.data.channels)
    }
    getList()
  }, [])
  return (
    <div>
      this is app
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}
*/

/*
案例二：useEffect的不同依赖项示例
function App () {
  // 1. 没有依赖项 初始 + 组件更新
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   console.log('副作用函数执行了')
  // })

  // 2. 传入空数组依赖 初始执行一次
  // useEffect(() => {
  //   console.log('副作用函数执行了')
  // }, [])

  // 3. 传入特定依赖项 初始 + 依赖项变化时执行
  useEffect(() => {
    console.log('副作用函数执行了')
  }, [count])

  return (
    <div>
      this is app
      <button onClick={() => setCount(count + 1)}>+{count}</button>
    </div>
  )
}
*/

/*
案例三：在Son组件渲染时开启一个定时器，卸载时清除这个定时器 
*/
function Son () {
  // 1. 渲染时开启一个定时器
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('定时器执行中...')
    }, 1000)

    return () => {
      // 清除副作用(组件卸载时)
      clearInterval(timer)
    }
  }, [])
  return <div>this is son</div>
}

function App () {
  // 通过条件渲染模拟组件卸载
  const [show, setShow] = useState(true)
  return (
    <div>
      {show && <Son />}
      <button onClick={() => setShow(false)}>卸载Son组件</button>
    </div>
  )
}

export default App