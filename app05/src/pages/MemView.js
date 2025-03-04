import React,{useEffect, useState} from "react";
import '../App.css';
import MovieList from '../components/MovieList';
import Form from '../components/Form';
import Nav from '../components/Nav';
import View from "../components/View";
import { useParams } from "react-router-dom";
import axios from 'axios';

const MemView = ({user}) => {
    const [users, setUsers] = useState([]);
    const params = useParams(); // parameter 값을 변수로 저장
    console.log("아이디 : "+params.id)

    useEffect(
      () => {
        axios.get(`http://localhost:8181/member/memberView?id=${params.id}`)
        .then(
          response =>{
            console.log(response);
            setUsers(response.data);
          }
        )
      },[]
    );  


  return (
    <div className="App">
      <Nav/>
      <h2>멤버상세보기</h2>
      <div className='moviebox'>
       <View user={user} key={user}/>
      </div>


      {/* <div className='moviebox'>
      <MovieList uBtn="update" dBtn ="delete" />
      <MovieList uBtn="변경" dBtn="제거"/>
      <MovieList/>
      </div> */}
    </div>
  )
}

export default MemView;