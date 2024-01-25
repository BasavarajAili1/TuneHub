import axios from 'axios';
import React, { useState } from 'react'
// import { listSongs } from "../services/SongService";
import { useNavigate } from 'react-router-dom';

const Login = ({setPremiumCustomerSongs}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8081/validate",
        {
          email,
          password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            // Add any additional headers if needed
          },
        }
      );

      if (response.data === "adminHome") {
        console.log(response.data)
        navigator("/adminHome");
      } else if (response.data === "premiumCustomerHome") {
        // Fetch premium status separately
        const premiumStatusResponse = await axios.get(
          `http://localhost:8081/isUserPremium?email=${email}`
        );
        const isUserPremium = premiumStatusResponse.data;
        console.log(isUserPremium)

        if (isUserPremium) {
          // Fetch premium songs and then navigate to customerHome
          // listSongs()
          //   .then((songResponse) => {
          //     if (setPremiumCustomerSongs) {
          //       setPremiumCustomerSongs(songResponse.data);
          //     }
          //     navigator("/customerHome");
          //   })
          //   .catch((error) => {
          //     console.error(error);
          //   });
          navigator("/PremiumCustomerHome");
        } 
        // else {
        //   //To Handle non-premium user (optional)
        //   console.log("Non-premium user");
        //   navigator("/customerHome");
        // }
      } else if (response.data === "customerHome") {
        console.log(response.data)
        navigator("/customerHome");
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  function navigateToRegistration() {
    navigator("/registration");
  }
  return (
    <>
      <div className="container">
        <br></br>
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2 className="text-center display-6">LOGIN HERE</h2>
            <div className="card-body">
              {/* new form  */}

              <form onSubmit={handleSubmit}>
                <div class="row mb-3"></div>
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
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    LOGIN
                  </button>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={navigateToRegistration}
                  >
                    SIGN IN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login

//   try {
    //     const response = await axios.post("http://localhost:8081/validate", {
    //       email,
    //       password,
    //     });

    //     if (response.data === "adminHome") {
    //       navigator("/adminHome");
    //     } else if (
    //       response.data === "premiumCustomerHome" ||
    //       response.data === "customerHome"
    //     ) {
    //       navigator("/customerHome");
    //     } else {
    //       console.log("Login failed");
    //     }
    //   } catch (error) {
    //     console.error("Error during login:", error);
    //   }
    // };