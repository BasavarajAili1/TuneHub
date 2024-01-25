import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSong, updateSong } from "../services/SongService";
import Header from "../components/Header";

const NewSong = () => {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [link, setLink] = useState("");

  const { id } = useParams();
  const navigator =  useNavigate();

  useEffect(() => {
    if (id) {
      getSong(id)
        .then((response) => {
          setName(response.data.name)
          setArtist(response.data.artist)
          setGenre(response.data.genre)
          setLink(response.data.link)
        })
        .catch((error) => {
          window.alert(error)
        });
    }
  }, [id]);

   const addOrUpdateSong = async (e) => {
     e.preventDefault(); // Prevent the default form submission
    //  const song = {name, artist, genre, link}
    const song = { id: +id, name, artist, genre, link };

     console.log(song)

     if(id){
      updateSong(id, song).then((response) => {
        console.log(response.data);
        navigator("/viewSongs")
      }).catch(error => {
        console.error(error);
      })
     }else{
        try {
          const response = await axios.post("http://localhost:8081/addSong", {
          id,  
          name,
            artist,
            genre,
            link,
          });

          console.log(response.data);

          // Show an alert upon successful addition
          window.alert("Song added successfully!");

          // Reset the form fields
          setName("");
          setArtist("");
          setGenre("");
          setLink("");
          navigator("/viewSongs");
          
        } catch (error) {
          // Handle error responses, check for status code 409
          if (error.response && error.response.status === 409) {
            // Show an alert if the song already exists
            window.alert("Song already exists!");
            setName("");
            setArtist("");
            setGenre("");
            setLink("");
          } else {
            // Show a generic alert for other errors
            window.alert("Song not added. An error occurred: " + error.message);
          }
        }
     }

     
   };
  //  const {id} = useParams();
   function pageTitle(){
    if(id){
      return <h2 className="text-center display-6">Update Song</h2>
    }else{
      return <h2 className="text-center display-6">Add Song</h2>
    }
   }

   function updateButton() {
     if (id) {
       return (
         <button type="submit" className="btn btn-primary">
           Update Song
         </button>
       );
     } else {
       return (
         <button type="submit" className="btn btn-primary">
           Add Song
         </button>
       );
     }
   }

  return (
    <>
    <Header></Header>
      <div className="container">
        <br></br>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {pageTitle()}
            <div className="card-body">
              <form onSubmit={addOrUpdateSong}>
                <div className="form-group mb-2">
                  <label className="form-label">Song Name</label>
                  <input
                    type="text"
                    placeholder="Enter Song Name"
                    name="name"
                    required
                    value={name}
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Artist Name</label>
                  <input
                    type="text"
                    placeholder="Enter Artist Name"
                    name="artist"
                    required
                    value={artist}
                    className="form-control"
                    onChange={(e) => setArtist(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Genre</label>
                  <input
                    type="text"
                    placeholder="Enter Genre"
                    name="genre"
                    required
                    value={genre}
                    className="form-control"
                    onChange={(e) => setGenre(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Link</label>
                  <input
                    type="text"
                    placeholder="Enter Song Link"
                    name="link"
                    required
                    value={link}
                    className="form-control"
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
                {/* <button type="submit" className="btn btn-success">
                  Add Song
                </button> */}
                {updateButton()}
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default NewSong;


