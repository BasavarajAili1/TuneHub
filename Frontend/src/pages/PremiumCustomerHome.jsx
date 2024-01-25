import React, { useEffect, useState } from "react";
import { listSongs } from "../services/SongService";
import Header from "../components/Header";
// import { useNavigate } from "react-router-dom";

const PremiumCustomerHome = () => {
  const [songs, setSongs] = useState([]);
//   const navigator = useNavigate();

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
  return (
    <>
    <Header />
    <br></br>
      <h2 className="text-center display-6">Listen to the songs</h2>
      <br></br>

      <div className="premium">
        <div className="container ">
          <table className="table table-bordered table-hover ">
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
                    <audio controls controlsList="nodownload">
                      <source src={song.link} type="audio/mpeg"></source>
                    </audio>
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

export default PremiumCustomerHome;
