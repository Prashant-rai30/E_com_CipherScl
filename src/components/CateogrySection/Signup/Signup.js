import "./Signup.css";
import React from "react";
import Navbar from "../../Navbar/Navbar";


function SignInBody() {
   

  return (<>
    
    <div className="signinbody_container">
   
      <div className="signinbody_form">
        <p className="signinbody_title" >SIGN IN</p>
        <input placeholder="EMAIL" />
        <input placeholder="PASSWORD" type="password" />
        <button>SIGN IN</button>
        <button>Login as guest</button>
        <p className="signinbody_text">
          New to movie app? <b>Sign up Now</b>{" "}
        </p>
      </div>
    </div></>
  );
}

export default SignInBody;