// 当前文件：就是当前项目的根组件
// app被引入到index.js然后被渲染到public/index.html的一个id为root的dom节点上
const count = 100
function getName() {
  return 'rosy'
}
function App() {
  return (
    // 在js代码中编写HTML模板结构，就是JSX（JavaScript和XML（HTML）的缩写）
    // 是react中编写UI模板的方式
    // JSX并不是一种标准的js语法，是js的语法扩展，浏览器本身不能识别，需要解析工具（Babel）解析之后才能在浏览器中运行

    // 在jsx中可以通过大括号语法{}识别JavaScript中的表达式，比如常见的变量、函数调用、方法调用等等，语句是不能出现在{}中的，例如for，if，switch，变量声明等等
    // 1.使用引号传递字符串
    // 2.使用JavaScript变量
    // 3.函数调用和方法调用
    // 4.使用JavaScript对象
    < div className="App" >
      this is App,
      {/* 1.使用引号传递字符串*/}
      {'this is a message'}
      {/* 2.使用JavaScript变量 */}
      {count}
      {/* 3.函数调用和方法调用 */}
      {getName()} 
      {new Date().getDate()}
      {/* 4.使用JavaScript对象 */}
      <div style={{color:'red'}}>
        this is a div
      </div>
    </div>
  );
}

export default App;
