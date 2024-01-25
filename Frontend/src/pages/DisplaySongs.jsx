import React, { useEffect, useState } from "react";
import { deleteSong, listSongs } from "../services/SongService";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const DisplaySongs = () => {
  const [songs, setSongs] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllSongs()
  }, []);
  
  function getAllSongs(){
    listSongs().then((response) => {
      setSongs(response.data)
    }).catch(error => {
      console.error(error);
    })
  }

  function addNewSong(){
    navigator("/newSong");
  }

  function updateSong(id){
    navigator(`/edit-song/${id}`);
  }

  function removeSong(id){
    console.log(id);
    window.alert("Song deleted with ID: "+id);

    deleteSong(id).then((response) => {
      getAllSongs();
    }).catch(error =>{
      console.error(error);
    })
  }

  return (
    <>
    <Header></Header>
      <div className="container">
        <br></br>
        <h2 className="text-center display-6">Listen to the songs</h2>
        <button className="btn btn-primary" onClick={addNewSong}>
          ADD SONG
        </button>
        <br></br>
        <br></br>
        <table className="table table-bordered  table-hover">
          <thead className="table-dark">
            <tr>
              <th>NAME</th>
              <th>ARTIST</th>
              <th>GENRE</th>
              <th>PLAY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => (
              <tr key={song.id}>
                <td>{song.name}</td>
                <td>{song.artist}</td>
                <td>{song.genre}</td>
                <td>
                  <audio controls>
                    <source src={song.link} type="audio/mpeg"></source>
                  </audio>
                </td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => updateSong(song.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeSong(song.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DisplaySongs;
