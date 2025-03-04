import React,{use, useState} from "react";

const Form = ({addMovie}) =>{

  const [count, setCount] = useState(4);
  const [no, setNo] = useState(0);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const saveBtn = () =>{
    alert("영화정보를 저장합니다.")
    // 영화정보 저장
    addMovie({no:count,title:title,date:date});
    resetData();
    setCount(count+1); // db에서 sequence로 대체됨
  }
  
  // input 화면 지우기
  const resetData = () => {
    setTitle("");
    setDate("");
  }

  return (
    <>
      <form>
        <div classNAme="mb-3">
          <label for="exampleFormControlInput1" className="form-label">영화제목</label>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="exampleFormControlInput1"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">날짜정보</label>
          <input className="form-control" id="exampleFormControlTextarea1" value={date} onChange={(e)=>setDate(e.target.value)}/>
        </div>
        <button type='button' onClick={saveBtn} className='btn btn-primary w-100'>저장</button>
       </form>
    </>
  );
}

export default Form;