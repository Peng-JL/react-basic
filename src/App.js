import './index.css'
import { useState } from 'react'
// 当前登录用户信息
const user = {
  username: '张三',
  id : 1,
  userPhoto: 'https://avatars.githubusercontent.com/u/55019105?v=4'
}
// 导航Tab数据
const tabs = [
  {
    type: 'new',
    name: '最新'
  },
  {
    type: 'hot',
    name: '最热'
  }
]
function App() {
  /*  
  案例一：评论列表
  1.渲染评论列表
    1.1使用useState维护评论列表
    1.2使用map方法对列表数据进行遍历渲染，别忘了加key
  2.删除评论列表
    2.1只有自己的评论才显示删除按钮
    2.2点击删除就从列表中删除
  3.渲染导航tab和点击高亮
    3.1点击谁就把谁的type记录下来
    3.2通过记录的type和每一项遍历时的type做匹配，控制激活类名的显示
  4.评论列表排序功能实现
  */
 const [comments, setComments] = useState([
   {
     comment_id: 1,
     username: '李四',
     content: '无语啦..',
     createTime: '2021-01-01 12:00:00',
     userPhoto: 'https://avatars.githubusercontent.com/u/55019105?v=6'
    },
    {
      comment_id: 2,
      username: '王五',
      content: '我只能说666..',
      createTime: '2021-01-01 12:00:00',
      userPhoto: 'https://avatars.githubusercontent.com/u/55019105?v=7'
    }
  ])
    const ClickPushComment=()=> { 
      setComments([
        ...comments,
        {
          comment_id: comments.length + 1,
          username: user.username,
          content: document.querySelector('.comment-textarea').value,
          createTime: new Date().toLocaleString(),
          userPhoto: user.userPhoto
        }
      ])
      document.querySelector('.comment-textarea').value = ''  
    }
    const ClickDeleteComment=(comment_id)=> {
      // filter函数的作用是 筛选出符合条件的元素，并返回一个新的数组
      setComments(comments.filter(item => item.comment_id !== comment_id))
    }
    const [type, setType] = useState('hot')
    const handleTypeChange = (type) => {
      setType(type)
    }
    return (
      < div className="App" >
      <div className="comment-tabs">
        {tabs.map(item => (
          <span className={type === item.type ? 'comment-tab-click' : 'comment-tab'} key={item.type} onClick={()=>handleTypeChange(item.type)}>{item.name}</span>
        ))}
      </div>
      <div className="comment-list">
        {comments.map(item => (
          <div className="comment-item" key={item.comment_id}>
            <div className="comment-header">
              <img className="comment-photo" src={item.userPhoto} alt="用户头像" />
              <span className="comment-username">{item.username}</span>
              <span className="comment-time">{item.createTime}</span>
            </div>
            <div className="comment-content">{item.content}</div>
            {/* 删除评论按钮 */}
            {item.username === user.username && <button className="comment-delete" onClick={() => ClickDeleteComment(item.comment_id)}>删除</button>}
          </div>
        ))}
      </div>
      <div className="comment-form">
        <textarea className="comment-textarea" placeholder="请输入评论..." />
        <button className="comment-button" onClick={ClickPushComment}>发布</button>
      </div>
    </div>
  );
}
export default App;
