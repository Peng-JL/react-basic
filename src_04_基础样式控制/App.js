import './index.css'
const style = {
  color:'red',
  backgroundColor:'skyblue'
}
function App() {
  /*  
   组件的样式处理
    1.行内样式（不推荐）
    2.class类名控制
 */
  return (
    < div className="App" >
      <div style={{backgroundColor:'red',color:'blue'}}>行内样式1</div>
      <div style={style}>行内样式2</div>
      <div className="foo">类名控制</div>
    </div>
  );
}
export default App;
