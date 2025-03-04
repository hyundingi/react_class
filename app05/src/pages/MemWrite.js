import React,{useState} from "react";
import '../App.css';
import MovieList from '../components/MovieList';
import Form from '../components/Form';
import Nav from '../components/Nav';

const MemWrite = () => {
    const [movies, setMovies] = useState(
    // json 데이터 (배열 객체 모양)
    // 일반변수는 새로고침을 해야 화면에 적용됨
    // useEffect 사용해서 db 데이터를 가져와 movies에 저장
    [
      {no:1,title:"해리포터 1",date:"2020-01-01"},
      {no:2,title:"해리포터 2",date:"2021-01-01"},
      {no:3,title:"해리포터 3",date:"2022-01-01"},
    ]
  );

  // 데이터 추가 (insert / post 방식)
  const addMovie = (movie) =>{
    setMovies([movie,...movies,])
  }
  

  return (
    <div className="App">
      <Nav/>
      <h2>회원정보추가</h2>
       <Form addMovie={addMovie} />
    </div>
  )
}

export default MemWrite;