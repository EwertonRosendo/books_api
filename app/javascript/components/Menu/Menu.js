import React from "react";
import axios from "axios";
import PropTypes from 'prop-types';

const Menu = (props) => {
  const logged_in = () =>{
    if (props.user_id){
      return(
        <button onClick={handleLogOut}> Logout</button>
      )
    }else{
    return(
      <>
        <p><a href={'http://localhost:3000/sign_in'}>Login</a></p>
        <p><a href={'http://localhost:3000/sign_up'}>Register</a></p>
      </>
    )}
  }

  const handleLogOut = () =>{
    axios.delete("http://localhost:3000/sign_out",{
      headers:{
          "Content-Type": "application/json",
          "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content
      }
    })
  }

  return (
    <React.Fragment>
      <div className="menu">
<<<<<<< HEAD
<<<<<<< HEAD
        <div style={{display: 'flex'}}>
            <p><a href={'http://localhost:3000/GoogleBooks'}>Google API</a></p>
            {props.user_id ? <p><a href={'http://localhost:3000/Books'}>My Books</a></p> : <></>}
        </div>
        <div style={{display:'flex'}}>
          {logged_in()}
        </div>    
      </div>
    </React.Fragment>
  )
}

Menu.propTypes = {
  user_id: PropTypes.bool
};
export default Menu
=======
=======
>>>>>>> authentication_without_devise
        <div style={{ display: "flex" }}>
          <p>
            <a href={"http://localhost:3000/GoogleBooks"}>Google API</a>
          </p>
          <p>
            <a href={"http://localhost:3000/Books"}>My Books</a>
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <p>
            <a href={"#"}>Login</a>
          </p>
          <p>
            <a href={"#"}>Logout</a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Menu;
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> authentication_without_devise
