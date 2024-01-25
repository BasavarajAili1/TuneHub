import React, { useEffect, useState } from "react";
import { listSongs } from "../services/SongService";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const CustomerHome = () => {
  const [songs, setSongs] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllSongs();
  }, []);

  function getAllSongs() {
    listSongs()
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function navigateToPremium() {
    navigator("/pay");
  }

  // const handleLogout = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8081/logout", {
  //       method: "DELETE",
  //       credentials: "include",
  //     });

  //     if (response.status === 204) {
  //       console.log("Logout successful");
  //       window.alert("Logout successful");
  //       // Redirect to the login page or any other page after successful logout
  //       navigator("/login");
  //     } else {
  //       console.error("Logout failed");
  //       // Handle unsuccessful logout
  //     }
  //   } catch (error) {
  //     console.error("Error during logout:", error);
  //     // Handle error, show an error message, etc.
  //   }
  //   // const handleLogout = () => {
  //   //   fetch("http://localhost:8081/logout", {
  //   //     method: "POST",
  //   //     credentials: "include",
  //   //   }).then(() => {
  //   //     navigator("/login");
  //   //   });
  //   // };
  // };
  
  return (
    <>
      <Header />
      <br></br>
      <h2 className="text-center display-6">Welcome to Tune Hub</h2>
      <br></br>
      {/* <div>
        <a href="pay">Get Premium</a>
        <br></br>
      </div> */}

      <div className="premium">
        <div className="container">
          <h4 className="text-center">SUBSCRIBE FOR NEW RELEASES</h4>
          <table className="table table-bordered  table-hover">
            <thead className="table-dark">
              <tr>
                <th>NAME</th>
                <th>ARTIST</th>
                <th>GENRE</th>
                <th>PLAY</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song) => (
                <tr key={song.id}>
                  <td>{song.name}</td>
                  <td>{song.artist}</td>
                  <td>{song.genre}</td>
                  <td>
                    <button className="btn btn-warning" onClick={navigateToPremium}>
                      {" "}
                      GET PREMIUM
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CustomerHome;