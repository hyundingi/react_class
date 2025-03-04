import React from 'react';
import { Link } from 'react-router-dom';

// prop 가 핵심
// 아래와 같이 하면  prop 변수를 분해해서 받음
// const MoveList = ({uBtn,dBtn}) =>{
// const MoveList = (props) =>{/
const MemberList = ({user, delMovie}) =>{

  const deleteBtn = () =>{
    alert(user.no+"데이터를 삭제합니다.")
    delMovie(user.no); // 삭제처리
  }

  // console.log(movie)
  return(
    <>

    <div className="card">
        <h5 className="card-header">아이디 {user.id}</h5>
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/memView/${user.id}`}>{user.name}</Link>
          </h5>
          <p className="card-text">{user.email}</p>
          <a href="#" className="btn btn-primary">수정</a>
          <a onClick={deleteBtn} className="btn btn-primary">삭제</a>
        </div>
      </div>
    </>
  );
}

export default MemberList;