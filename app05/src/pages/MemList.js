import React,{useEffect, useState} from "react";
import '../App.css';
import MemberList from '../components/MemberList';
import Nav from '../components/Nav';
import axios from 'axios';

const MemList = () => {
    const [users, setUsers] = useState([]);
    
  // json 데이터 (배열 객체 모양)
  // 일반변수는 새로고침을 해야 화면에 적용됨
  // useEffect 사용해서 db 데이터를 가져와 movies에 저장
  // 서버와 통신해서 데이터 가져오기
  // 스프링 url주소 넣을거임
  useEffect(
    () => {
      axios.get("http://localhost:8181/mlist2")
      .then(
        response =>{
          console.log(response);
          setUsers(response.data);
        }
      )
    },[]
  );

  // 데이터 추가 (insert / post 방식)
  const addMovie = (user) =>{
    setUsers([user,...users,])
  }
  // 데이터 삭제 (delete / delete 방식)
  const delMovie = (no) =>{
    console.log("삭제번호 : "+no);
    // 데이터 삭제 : filter 해당되는 데이터를 리턴해서 돌려줌
    setUsers(
      users.filter((movie)=>{return(movie.no != no)})
    ) // setmovie
  } // delmovie
  // 데이터 수정 (update / put방식)

  // --------------- 0228
  // map 반복문 // for 나 foreach는 return 값을 받아오지 못함 
  // const movies2 = movies map(
  // (m) => { 
  // return (m*3)
  // }
  // )
  // ------------------------

  // 데이터 출력(select / get방식)
  // 반복문 : map함수 - return해서 값을 돌려줌 / for문 - 반복만 함 return 없음
  // 최초 스프링에서 데이터를 useEffect로 가져와서 map으로 리스트를 출력하는 형태 구성
  // 삼항식을 사용해서 영화정보 데이터가 없을 때 처리
  const members = 
    users.length?
    users.map((user)=>{
      return(
        <MemberList user={user} key={user.id}/>
      );
    }):"회원정보 데이터가 없습니다.";

  return (
    <div className="App">
      <Nav/>
      <h2>회원정보리스트</h2>

      <div>
        {members}
      </div>
    </div>
  )
}

export default MemList;