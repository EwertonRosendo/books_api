import React from "react";

const Menu = (props) => {
  return (
    <React.Fragment>
      <div className="menu">
        <div style={{display: 'flex'}}>
            <p><a href={'http://localhost:3000/GoogleBooks'}>Google API</a></p>
            <p><a href={'http://localhost:3000/Books'}>My Books</a></p>
        </div>
        <div style={{display:'flex'}}>
            <p><a href={'#'}>Login</a></p>
            <p><a href={'#'}>Logout</a></p>
        </div>    
      </div>
    </React.Fragment>
  )
}
export default Menu