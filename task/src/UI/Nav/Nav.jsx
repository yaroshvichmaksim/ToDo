import React from "react";
import { Link } from "react-router-dom";

const Nav =() =>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Переключатель навигации">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link class="navbar-brand text-black" to="/todos"  href="/todos">ToDo</Link>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active text-black" aria-current="page" to="/todos">Главная</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-black" to="/users">Axios</Link>
          </li>

        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск"/>
          <button class="btn btn-outline-success me-2 search" type="submit">Поиск</button>
        </form>
      </div>
    </div>
  </nav>
    )
}
 export default Nav