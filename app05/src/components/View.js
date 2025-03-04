import React from "react";
import { Link } from "react-router-dom";

const View = ({user}) => {
  console.log("view 창 ",user)
  return (
    <>
      <div className="card text-center">
        <div className="card-header">
          아이디 : {user}
        </div>
        <div className="card-body">
          <h5 className="card-title">이름 : {user}</h5>
          <Link to="/MemList" className="btn btn-primary">Go List</Link>
        </div>
        <div className="card-footer text-body-secondary">
          회원정보확인
        </div>
      </div>
    </>
  );
}

export default View;