/*  
优化：
1. 使用请求接口的方式获取评论列表并渲染
  1.1 使用 json-server 工具模拟接口服务,通过 axios 发送接口请求
      json-server是一个快速以.json文件作为数据源模拟接口服务的工具
      axios是一个广泛使用的前端请求库
  1.2 使用 useEffect 调用接口获取数据
2. 使用自定义Hook函数封装数据请求的逻辑
  2.1 编写一个 use 打头的函数
  2.2 函数内部编写封装的逻辑
  2.3 return出去组件中用到的状态和方法
  2.4 组件中调用
3. 把评论中的每一项抽象成一个独立的组件实现渲染
  3.3 抽象原则：App作为“智能组件”负责数据的获取，Item作为“UI组件”负责数据的渲染
*/
import './index.css'
import { useEffect, useState } from 'react'
import _, { random } from 'lodash'
import classNames from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'
import { useRef } from 'react'
import axios from 'axios'
// 当前登录用户信息
const user = {
  username: '张三',
  id: 1,
  avatar: 'https://avatars.githubusercontent.com/u/55019105?v=4'
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

function useGetList() {
  // 获取接口数据渲染
  const [commentList, setCommentList] = useState([])
  useEffect(() => {
    async function getData() {
      const res = await axios.get('http://localhost:3004/list')
      res.data = _.orderBy(res.data, 'like', 'desc')
      setCommentList(res.data)
    }
    getData()
  }, [])
  return {
    commentList,
    setCommentList
  }
}

function Item({ item, onDel }) {
  return (
    <div className="comment-item">
      <div className="comment-header">
        <img className="comment-photo" src={item.user.avatar} alt="用户头像" />
        <span className="comment-username">{item.user.username}</span>
        <span className="comment-like" style={{ color: 'red', marginRight: '10px' }}>点赞数{item.like}</span>
        <span className="comment-time">{item.ctime}</span>
        {/* <span className="comment-time">{item.ctime}~id:{item.rpid}</span> */}
      </div>
      <div className="comment-content">{item.content}</div>
      {/* 删除评论按钮 */}
      {item.user.username === user.username && <button className="comment-delete" onClick={() => onDel(item.rpid)}>删除</button>}
    </div>
  )
}
function App() {
  const { commentList, setCommentList } = useGetList()
  const [content, setContent] = useState('')
  const inputRef = useRef()
  const ClickPushComment = () => {
    setCommentList([
      ...commentList,
      {
        rpid: uuidv4(),
        user: {
          uid: 111,
          username: user.username,
          avatar: user.avatar
        },
        content: content,
        like: 0,
        ctime: dayjs(new Date()).format('MM-DD HH:mm'),
      }
    ])
    setContent('')
    inputRef.current.focus()
  }
  const ClickDeleteComment = (rpid) => {
    // filter函数的作用是 筛选出符合条件的元素，并返回一个新的数组
    setCommentList(commentList.filter(item => item.rpid !== rpid))
  }
  const [type, setType] = useState('hot')
  const handleTypeChange = (type) => {
    setType(type)
    if (type === 'hot') {
      setCommentList(_.orderBy(commentList, 'like', 'desc'))
    } else {
      setCommentList(_.orderBy(commentList, 'ctime', 'desc'))
    }
  }
  return (
    < div className="App" >
      <div className="comment-tabs">
        {tabs.map(item => (
          // <span className={type === item.type ? 'comment-tab-click' : 'comment-tab'} key={item.type} onClick={()=>handleTypeChange(item.type)}>{item.name}</span>
          // classNames是一个简单的js库，可以非常地通过条件动态控制class类名的显示
          <span className={classNames('comment-tab', { 'comment-tab-click': type === item.type })} key={item.type} onClick={() => handleTypeChange(item.type)}>{item.name}</span>
        ))}
      </div>
      <div className="comment-list">
        {commentList.map(item => (
          <Item key={item.rpid} item={item} onDel={ClickDeleteComment} />
        ))}
      </div>
      <div className="comment-form">
        <textarea className="comment-textarea" ref={inputRef} value={content} onChange={(e) => setContent(e.target.value)} placeholder="请输入评论..." />
        <button className="comment-button" onClick={ClickPushComment}>发布</button>
      </div>
    </div>
  );
}
export default App;
