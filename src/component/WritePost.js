import React from 'react'
import '../css/WritePost.css'


function WritePost() {
  return (
    <div className='wpContainer'>
      WritePost<br/>
      <form>
      Title :   <input type="text" placehold="제목 입력" />
      <br/>
      Content : <input type="text" placehold="제목 입력" />
      </form>
    </div>
  )
}

export default WritePost;
