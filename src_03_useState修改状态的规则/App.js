import { useState } from "react";
function App() {
  /*  
   useState修改状态的规则
    1.状态不可变：在react中状态被认为是只读的，我们应该始终替换它而不是修改它，直接修改状态不会引发视图更新。修改一定要使用与之绑定的函数。
    2.修改对象状态：对于对象类型的状态变量，应该始终传给set方法一个全新的对象来进行修改
 */

  let [count, setCount] = useState(0)
  const handleClick1 = () => {
    // 直接修改 无法引发视图更新
    count++
    console.log(count);
  }
  const handleClick2 = () => {
    setCount(count + 1)
  }
// -------------------------------------------------------
  const [form, setForm] = useState({
    name: 'jack',
  })
  const handleChangeName1 = () => {
    // 直接对象内某个成员修改 无法引发视图更新
    form.name = 'mike'
    console.log(form.name);
  }
  const handleChangeName2 = () => {
    setForm({
      ...form,
      name: 'mike' // 后面如果有相同的key，就是覆盖；不相同似乎是追加
    })
  }
  return (
    < div className="App" >
      <button onClick={handleClick1}>点击加一：{count}</button>
      <br />
      <button onClick={handleClick2}>点击加一：{count}</button>
      <br />
      <button onClick={handleChangeName1}>点击改名：{form.name}</button>
      <br />
      <button onClick={handleChangeName2}>点击改名：{form.name}</button>
    </div>
  );
}
export default App;
