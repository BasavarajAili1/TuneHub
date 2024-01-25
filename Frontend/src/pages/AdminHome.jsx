import React from 'react';
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";


export default function AdminHome() {
const navigate = useNavigate()

function navigateToViewSongs(){
  navigate("/viewSongs")
}

function navigateToAddSong() {
  navigate("/newSong");
}

function navigateToCreatePlaylist() {
  navigate("/createPlaylists");
}

function navigateToViewPlaylist() {
  navigate("/viewPlaylists");
}

const style = {
  display: "flex",
  justifyContent: "center"
};

  return (
    <>
      <Header />

      <h1 className="text-center display-5">Admin Home</h1>
      <br></br>
      <div className="btn-group" role="group" aria-label="Basic outlined example" style={style}>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={navigateToAddSong}
        >
          ADD NEW SONG
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={navigateToViewSongs}
        >
          VIEW SONGS
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={navigateToCreatePlaylist}
        >
          CREATE PLAYILIST
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={navigateToViewPlaylist}
        >
          VIEW PLAYILIST
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={navigateToViewSongs}
        >
          DELETE SONGS
        </button>
      </div>


    </>
  );
}