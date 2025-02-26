import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {

  let name = '홍길자';
  const [ename, setEname] = useState('유관순');
  const [a, setA] = useState('')
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  // let ename = ""; 
  
  const btn = () => {
    alert("함수버튼클릭");
    name='이순신';
    // document.getElementById("d01").innerText = name; // 자바스크립트 문법, ajax을 사용해서 데이터값을 넣는 방법
    console.log(name)

    // react useState 사용
    setEname('신사임당');
  }

  const loginBtn = () => {
    alert("로그인을 진행합니다. 클릭")
  }

  const pwBtn = (e) => {
    // console.log('pw inputbox 에 글을 입력합니다. ');
    // enter키가 들어오면 로그인 버튼을 클릭하도록 구현
    if(e.keyCode == 13){
      alert("엔터키가 입력됨")
      loginBtn();
    }
  }


  return (
    <div className="main">
      <h2>게시판</h2>
      <div id="d01">{name}</div>
      <div id="d02">{ename}</div>
      <button onClick={btn}>변경</button>
      <br/>
      <input type='text' name='id' className='id' onChange={(event)=>{setId(event.target.value)}} value={id} placeholder='아이디를 입력하세요'></input>
      <br/>
      <input type='text' name='pw' className='pw' onChange={(event)=>{setPw(event.target.value)}} value={pw} onKeyUp={pwBtn} placeholder='패스워드를 입력하세요'></input>
      <br/>
      {/* <button onClick={()=>{alert("버튼클릭")}}>변경</button> */}
      <button onClick={loginBtn}>로그인</button>




      {/* return 문 안에서 주석문 */}
      {/* if문은 사용할 수 없음. 3항식 사용 */}
      {/* {name == '홍길동'?(<h3>홍길동입니다.</h3>):(<h3>홍길동이 아닙니다.</h3>)} */}


    </div>

  );
}

export default App;
