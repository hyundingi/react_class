import React from 'react';

// prop 가 핵심
// 아래와 같이 하면  prop 변수를 분해해서 받음
// const MoveList = ({uBtn,dBtn}) =>{
// const MoveList = (props) =>{/
const MoveList = ({movie, delMovie}) =>{

  const deleteBtn = () =>{
    alert(movie.no+"데이터를 삭제합니다.")
    delMovie(movie.no); // 삭제처리
  }

  // console.log(movie)
  return(
    <>

    <div className="card">
        <h5 className="card-header">영화정보 {movie.no}</h5>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.date}</p>
          <a href="#" className="btn btn-primary">수정</a>
          <a onClick={deleteBtn} className="btn btn-primary">삭제</a>
        </div>
      </div>
    </>
  );
}

export default MoveList;