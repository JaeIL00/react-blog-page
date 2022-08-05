import { useState } from 'react';
import './App.css';

function App() {

  const [contentTitle, setContentTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  const [thumbs, setThumbs] = useState([0, 0, 0])
  const [modal, setModal] = useState(false)
  const [inputValue, setInputValue] = useState('')


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      
      {/* <div className="list">
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
      </div>  */}
      {
        contentTitle.map((a, i) => {
          return(
            <div className="list" key={ i }>
              <h4 onClick={() => { setModal(!modal) }}>{ a } <span onClick={(e)  => {
                e.stopPropagation()
                let copy = [...thumbs]
                copy[i] = copy[i] + 1
                setThumbs(copy)
                }}>👍</span> {thumbs[i]} </h4>
              <p>7월 30일 발행</p>
              <button onClick={() => {
                let deleteContent = [...contentTitle]
                deleteContent.splice(i, 1)
                setContentTitle(deleteContent)
              }}>삭제</button>
            </div>
          )
        })
      }
      <input onChange={(e) => {setInputValue(e.target.value)}} />
      <button onClick={() => {
        setContentTitle([inputValue, ...contentTitle])
      }}>추가</button>
      {
        modal === true ? <Modal contentTitle={contentTitle} womanTitle={setContentTitle} /> : null
      }

    </div>
  );
}

function Modal(props) {
  const {contentTitle, womanTitle}  = props
  return (
    <div className='modal'>
      <h4>{contentTitle[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => womanTitle(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학'])}>
        글 수정
      </button>
    </div>
  )
}

export default App;
