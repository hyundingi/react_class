import React from 'react';

// prop 가 핵심
// 아래와 같이 하면  prop 변수를 분해해서 받음
// const MoveList = ({uBtn,dBtn}) =>{
const MoveList = (prop) =>{

  // const upBtn = uBtn?uBtn:"수정";
  // const deBtn = dBtn?dBtn:"삭제";
  const uBtn = prop.uBtn?prop.uBtn:"수정";
  const dBtn = prop.dBtn?prop.dBtn:"삭제";

  return(
    <>
    <div className="card">
        <h5 className="card-header">영화정보</h5>
        <div className="card-body">
          <h5 className="card-title">해리포터</h5>
          <p className="card-text">2020-01-01</p>
          <a href="#" className="btn btn-primary">{uBtn}</a>
          <a href="#" className="btn btn-primary">{dBtn}</a>
        </div>
      </div>
    </>
  );
}

export default MoveList;