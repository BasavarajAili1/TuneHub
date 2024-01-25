import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate()

  function navigateTLogin(){
    navigate("/login")
  }
  function navigateTRegister(){
    navigate("/registration")
  }

  const style = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <>
      <h2 className="text-center display-5">Welcome to TuneHub</h2>
      <br></br>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
        style={style}
      >
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={navigateTLogin}
        >
          LOGIN
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={navigateTRegister}
        >
          REGISTER
        </button>
      </div>

      
    </>
  );
}

export default Home