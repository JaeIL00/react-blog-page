import { useState } from 'react';
import './App.css';

function App() {

  const [contentTitle, setContentTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  const [thumbs, setThumbs] = useState(0)
  let [modal, setModal] = useState(false)


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={() => {
        let copy = [...contentTitle]
        copy[0] = '여자 코트 추천'
        setContentTitle(copy)
        }}>
        글 수정
      </button>
      <div className="list">
        <h4 onClick={() => { setModal(!modal) }}>{contentTitle[0]} <span onClick={()  => {setThumbs(thumbs+1)}}>👍</span> {thumbs} </h4>
        <p>7월 30일 발행</p>
      </div>
      <div className="list">
      <h4>{contentTitle[1]}</h4>
        <p>7월 30일 발행</p>
      </div>
      <div className="list">
      <h4>{contentTitle[2]}</h4>
        <p>7월 30일 발행</p>
      </div>

      {
        modal === true ? <Modal /> : null
      }

    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
