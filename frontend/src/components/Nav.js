import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./Login";
import Qna from './Qna';
import Home from "./Home";
import Reg from "./Register";

import List from "./List";
import Write from "./Write";


function Nav(){
    // const [search, setSearch] = useState('');

    // const onChangeSearch = (e) => {
    //     setSearch(e.target.value)
        
    // }
    const onSubmit = () => {
        const words = document.getElementById('words').value;
        document.createElement("<span>"+words+"/span>");
    }
    return <>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>

<link rel="dns-prefetch" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css"/>

<link rel="stylesheet" href="css/style.css"/>

<link rel="icon" href="Favicon.png"/>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"/>
    
    <nav class="navbar navbar-expand-xl navbar-dark bg-dark" aria-label="Sixth navbar example">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" style={{width:"100px"}}> Trinity </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample06">
                <ul class="navbar-nav me-auto mb-2 mb-xl-0" style={{width:'100%'}} >
                    <li class="nav-item" >
                        <a class="nav-link active" aria-current="page" href="/home" style={{height:'40px', }}>Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="/login" style={{height:'40px', width:"63px"}}>Log-in</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/write" style={{height:'40px', width:'97px'}} >QnA 글쓰기</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/list" tyle={{height:'40px', width:'79px'}}>QnA 목록</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/register"  data-bs-toggle="dropdown" aria-expanded="false" tyle={{height:'40px', width:'84px'}}>회원가입</a>
                        <ul class="dropdown-menu" >
                            <li><a class="dropdown-item" href="#">계정 만들기</a></li>
                            <li><a class="dropdown-item" href="#">아이디/비밀번호 찾기</a></li>
                            <li><a class="dropdown-item" href="#">비밀번호 변경하기</a></li>
                        </ul>
                    </li>
                </ul>
                <form style={{width:"400px", display:"flex"}}>
                    <input id="words" class="form-control" type="text" placeholder="Search" aria-label="Search" style={{width:"500px"}}/> 
                </form>
                <button class="btn btn-secondary" style={{marginLeft:"5px", marginRight:"5px"}} onClick={onSubmit}>search</button>
                <ul class="navbar-nav me-auto mb-2 mb-xl-0">
                <li class="nav-item" style={{}}>
                        <a class="nav-link" href="#">English</a>
                </li>
                <li class="nav-item" style={{}}>
                        <a class="nav-link" href="#">|</a>
                </li>
                <li class="nav-item" style={{}}>
                        <a class="nav-link" href="#">Korean</a>
                </li>
                </ul>
            
            </div>
        </div>
    </nav>
    <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/qna" element={<Qna/>} />
            <Route path="/home" element={<Home/>} />
	<Route path="/register" element={<Reg />} />

    <Route path="/list" element={<List/>}/>
    <Route path="/write" element={<Write/>}/>
    </Routes></>

}

export default Nav
