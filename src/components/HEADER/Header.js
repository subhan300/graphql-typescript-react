import React from 'react'

function Header() {
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-light bg-warning text-center">
  <a class="navbar-brand" href="#">SPACE X</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse text-center " id="navbarNav" 
  style={{
justifyContent:"center",fontSize:"20px"}}>
    <ul class="navbar-nav text-center">
      <li class="nav-item active text-center">
        <a class="nav-link" href="#">PROJECT 8 : SPACE X <span class="sr-only">(current)</span></a>
      </li>
  
    </ul>
  </div>
</nav> 
        </div>
    )
}

export default Header
