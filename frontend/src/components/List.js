import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Write from "./Write";

function List(){
/*
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      /* axios.get() 안에 url은 블로그에 올라온 테스트용 db 데이터
      
      setPosts(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(posts);
  */
 
  /*여기부터 폼*/

     return<Fragment>
        <link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />

        <div class="container" style={{marginTop:'60px'}}>
      <table class="table">
        <thead class="thead-light">
          <tr class="text-center">
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">작성자</th>
            <th scope="col">작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" thEach="post : ${postList}">
            <th scope="row">
              <span thText="${post.id}"></span>
            </th>
            <td>
              <a thHref="@{'/post/' + ${post.id}}">
                <span thText="${post.title}"></span>
              </a>
            </td>
            <td>
              <span thText="${post.author}"></span>
            </td>
            <td>
              <span thText="${#temporals.format(post.createdDate, 'yyyy-MM-dd HH:mm')}"></span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col-auto mr-auto"></div>
        <div class="col-auto">
          <a class="btn btn-primary" thHref="@{/post}"  role="button" href="/write" style={{color:'white'}}>등록</a>
        </div>
      </div>
    </div>
    <script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
    <script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    
    <Routes>
        <Route path="/write" element={<Write/>}/>
    </Routes>

     </Fragment>
}

export default List