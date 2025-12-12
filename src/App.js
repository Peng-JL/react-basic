// 当前文件：就是当前项目的根组件
// app被引入到index.js然后被渲染到public/index.html的一个id为root的dom节点上


// const count = 100
// function getName() {
//   return 'rosy'
// }

// const list = [
//   {id:1001,name:'Vue'},
//   {id:1002,name:'React'},
//   {id:1003,name:'jQuery'}
// ]

// const isLogin = false
// const isLogin = true

// const articleType = 3 // 0 1 3
// function getArticleType() {
//   if (articleType === 0) {
//     return <div>无图文章</div>
//   } else if (articleType === 1) {
//     return <div>单图文章</div>
//   } else {
//     return <div>三图文章</div>
//   }
// }

function App() {
  const clickHandler1 = () => {
    console.log('按钮按下了',)
  }
  const clickHandler2 = (e) => {
    console.log('按钮按下了', e)
  }
  // const clickHandler3 = (name) => {
  //   console.log('按钮按下了', name)
  // }
  const clickHandler4 = (name, e) => {
    console.log('按钮按下了', name, e)
  }
  return (
    // JSX识别js表达式
    // 在js代码中编写HTML模板结构，就是JSX（JavaScript和XML（HTML）的缩写）
    // 是react中编写UI模板的方式
    // JSX并不是一种标准的js语法，是js的语法扩展，浏览器本身不能识别，需要解析工具（Babel）解析之后才能在浏览器中运行
    // 在jsx中可以通过大括号语法{}识别JavaScript中的表达式，比如常见的变量、函数调用、方法调用等等，语句是不能出现在{}中的，例如for，if，switch，变量声明等等
    // 1.使用引号传递字符串
    // 2.使用JavaScript变量
    // 3.函数调用和方法调用
    // 4.使用JavaScript对象
    // < div className="App" >
    //   this is App,
    //   {/* 1.使用引号传递字符串*/}
    //   {'this is a message'}
    //   {/* 2.使用JavaScript变量 */}
    //   {count}
    //   {/* 3.函数调用和方法调用 */}
    //   {getName()} 
    //   {new Date().getDate()}
    //   {/* 4.使用JavaScript对象 */}
    //   <div style={{color:'red'}}>
    //     this is a div
    //   </div>
    // </div>


    // JSX实现列表渲染
    // map循环哪个结构，就return哪个结构
    // 注意要加上一个独一无二的key，否则控制台报错。key的作用：react框架内部使用，用于提升列表更新性能
    // < div className="App" >
    //   <ul>
    //     {list.map(item => <li key={item.id}>{item.name}</li>)}
    //   </ul>
    // </div>


    // JSX实现条件渲染
    // < div className="App" >
    //   <ul>
    //     {/* 逻辑与 */}
    //     {isLogin && <span>this is span</span>}
    //     {/* 三元运算 */}
    //     {isLogin ? <span>jack</span> : <span>please Login</span>}
    //   </ul>
    // </div>


    // JSX实现复杂条件渲染
    // < div className="App" >
    //   <ul>
    //     {/* 调用函数渲染不同的模板 */}
    //     {getArticleType()}
    //   </ul>
    // </div>


    // react实现事件绑定
    < div className="App" >
      <ul>
        {/* {<button onClick={clickHandler1}>按钮</button>} 基础绑定*/}
        {/* {<button onClick={clickHandler2}>按钮</button>} 事件对象e*/}
        {/* {<button onClick={() => clickHandler3('jack')}>按钮</button>} 自定义参数*/}
        {/* {<button onClick={(e) => clickHandler4('jack',e)}>按钮</button>} 自定义参数+时间对象e*/}
      </ul>
    </div>
  );
}

export default App;
