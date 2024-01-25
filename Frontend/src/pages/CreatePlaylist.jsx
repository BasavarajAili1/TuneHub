import React from 'react';
import Header from "../components/Header";

const CreatePlaylist = () => {
  return (
    <>
    <Header></Header>
      <div>
        <br></br>
        <h2 className="text-center display-6">Create Playlist</h2>
        <form action="addPlaylist" method="post">
          <label>Playlist Name: </label>
          <input type="text" name="name" />

          <br />

          <div>
            <input type="checkbox" name="songs" />
            <label></label>
          </div>

          <input type="submit" value="ADD PLAYLIST" />
        </form>
      </div>
    </>
  );
}

export default CreatePlaylist


// import React, { useState } from 'react';

// const CreatePlaylist = () => {
//   const [playlist, setPlaylist] = useState({
//     name: 'Playlist1',
//     songs: [
//       {
//         id: 1,
//         name: 'Lili By',
//         artist: 'Alan Walker',
//         genre: 'Dance',
//         link: 'https://github.com/BasavarajAili1/audiofiles/raw/main/Lily%20by.mp3'
//       },
//       {
//         id: 3,
//         name: 'Happy Agide',
//         artist: 'All Ok',
//         genre: 'Dance',
//         link: 'https://github.com/BasavarajAili1/audiofiles/raw/main/Happy%20agide%20All%20Ok.mp3'
//       }
//     ]
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:8081/api/playlists/addPlaylist', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(playlist),
//       });

//       if (response.ok) {
//         console.log('Playlist added successfully!');
//       } else {
//         console.error('Failed to add playlist.');
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Create Playlist</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Playlist Name: </label>
//         <input type="text" name="name" value={playlist.name} readOnly />

//         <br />

//         {/* Add logic for rendering songs checkboxes if needed */}

//         <input type="submit" value="ADD PLAYLIST" />
//       </form>
//     </div>
//   );
// };

// export default CreatePlaylist;

