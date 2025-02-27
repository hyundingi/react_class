import React,{useEffect, useState} from 'react';
import Form  from './components/Form';
import './App.css';

function App() {

  
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const countBtn = () => {
    setCount(count+1);
  }

  const countBtn2 = () => {
    setCount2(count2+1);
  }
  
  // 화면이 리로딩 되면 실행되는 함수
  // useEffect : 최초 데이터를 가져와서 화면에 출력할 때
  // 특정변수가 변경될 때 명령어를 실행해야 할 때 사용 
  useEffect(
    () => {
     console.log('useState 변수 상관없이 무조건 실행') 
    }
  );

  useEffect(
    () => {
      console.log('useEffect : ',count)
    },[count]
  );

  useEffect(
    () => {
      console.log('useEffect2 : ',count2)
    },[count2]
  );

  useEffect(
    () => {
      console.log('처음 한 번만 실행 ')
    },[]
  );

  return (
    <div className="main">
      <h2>게시판</h2>
      <div className="idTxt">
        카운트 : {count}
      </div>
      <button onClick={countBtn}>카운트 증가</button>
      <br/>
      <div className="idTxt">
        카운트 : {count2}
      </div>
      <button onClick={countBtn2}>카운트 증가</button>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      
      <Form/>
      <Form/>
      <Form/>
      

    </div>
  );
}

export default App;
