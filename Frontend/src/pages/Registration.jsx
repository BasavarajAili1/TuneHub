import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");

  const navigator = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {username,email,password,gender,role,address,};
    console.log(user)

    try{
      const response = await axios.post("http://localhost:8081/register", {
        username,
        email,
        password,
        gender,
        role,
        address,
      });
      console.log(response.data);
      window.alert("Registraion Successfull")
      setUsername("");
      setEmail("");
      setPassword("");
      setGender("");
      setRole("");
      setAddress("");
      navigator("/login");
    }catch(error){
      // Handling error responses, check for status code 409
      if (error.response && error.response.status === 409) {
        // Showing an alert if the song already exists
        window.alert("User already exists! Try to login")
        setUsername("");
        setEmail("");
        setPassword("");
        setGender("");
        setRole("");
        setAddress("");
        navigator("/login");
      } else {
        // Showing a generic alert for other errors
        window.alert(
          "Account not created. An error occurred: " + error.message
        );
        console.error("Account not created. An error occurred:", error);
      }
    }
    
  };

  function navigateToLogin() {
    navigator("/login");
  }

  return (
    <>
      <div className="container-md">
        <br></br>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <h2 className="text-center display-6">SIGN UP</h2>

                {/* form  */}

                <form onSubmit={handleSubmit}>
                  <div class="row mb-3">
                    <label for="inputName3" class="col-sm-2 col-form-label">
                      Username
                    </label>
                    <div class="col-sm-10">
                      <input
                        required
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Enter Full Name"
                        onChange={(e) => setUsername(e.target.value)}
                        id="inputName3"
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">
                      Email
                    </label>
                    <div class="col-sm-10">
                      <input
                        required
                        type="email"
                        name="email"
                        class="form-control"
                        id="inputEmail3"
                        placeholder="mdo@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">
                      Password
                    </label>
                    <div class="col-sm-10">
                      <input
                        required
                        type="password"
                        class="form-control"
                        name="password"
                        id="inputPassword3"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <fieldset class="row mb-3">
                    <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                    <div class="col-sm-10">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="gridRadios1"
                          value="male"
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <label class="form-check-label" for="gridRadios1">
                          Male
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="gridRadios2"
                          value="female"
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <label class="form-check-label" for="gridRadios2">
                          Female
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="gridRadios3"
                          value="other"
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <label class="form-check-label" for="gridRadios3">
                          Other
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset class="row mb-3">
                    <legend class="col-form-label col-sm-2 pt-0">Role</legend>
                    <div class="col-sm-10">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="role"
                          id="gridRadios4"
                          value="admin"
                          onChange={(e) => setRole(e.target.value)}
                        />
                        <label class="form-check-label" for="gridRadios4">
                          Admin
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="role"
                          id="gridRadios5"
                          value="customer"
                          onChange={(e) => setRole(e.target.value)}
                        />
                        <label class="form-check-label" for="gridRadios5">
                          Customer
                        </label>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label class="form-label">Address</label>
                      <textarea
                        class="form-control"
                        rows="3"
                        name="address"
                        placeholder="Address"
                        required
                        onChange={(e) => setAddress(e.target.value)}
                      ></textarea>
                    </div>
                  </fieldset>
                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                    >
                      SIGN UP
                    </button>
                    <button
                      className="btn btn-primary"
                      type="submit"
                      onClick={navigateToLogin}
                    >
                      LOGIN
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration