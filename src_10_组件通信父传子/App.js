/*  
 组件传值
  1.父传子
  以下是两张图片中的文字内容：

  props详细说明
  1.1 props可传递任意的数据：数字、字符串、布尔值、数组、对象、函数、JSX
  1.2 props是只读对象：子组件只能读取props中的数据，不能直接进行修改，父组件的数据只能由父组件修改
  
  特殊的prop：children
  1.3 当我们把内容嵌套在子组件标签中时，父组件会自动在名为children的prop属性中接收该内容
*/
function Son(props) {
  console.log(props)
  return (
    <div>
      <span>
        this is son:
        {props.name}
      </span>
      <br/>
      <span>
        {props.children}
      </span>
    </div>
  )
}

function App() {

  const name = 'this is App'
  return (
    < div className="App" >
      <Son name={name}>
        <span>
          this is Son span
        </span>
      </Son>
    </div>
  );
}
export default App;
