import { useRef } from "react";
function App() {
  /*  
   React中获取DOM
    1.useRef生成ref对象 绑定到dom标签上
    2.dom可用时，ref.current获取dom
    渲染完毕之后dom生成之后才可用
 */
  const inputRef = useRef(null);
  const showDom = () => {
    console.log(inputRef.current);
    console.dir(inputRef.current);
  };  
  return (
    < div className="App" >
      <input
        ref={inputRef}
        type="text"
      />
      <button onClick={showDom}>获取DOM</button>
    </div>
  );
}
export default App;
