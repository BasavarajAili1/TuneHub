// import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import CustomerHome from "./pages/CustomerHome";
import AdminHome from "./pages/AdminHome";
import CreatePlaylist from "./pages/CreatePlaylist";
import DisplayPlaylists from "./pages/DisplayPlaylists";
import DisplaySongs from "./pages/DisplaySongs";
import NewSong from "./pages/NewSong";
import Pay from "./pages/Pay";
import PremiumCustomerHome from "./pages/PremiumCustomerHome";

export default function App() {
  // const [songs, setSongs] = useState([]);

  // const setPremiumCustomerSongs = (songList) => {
  //   setSongs(songList);
  // };
  return (
    <>
      <Router>
        <div>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* <Route
              path="/login"
              element={
                <Login setPremiumCustomerSongs={setPremiumCustomerSongs} />
              }
            /> */}
            <Route path="/registration" element={<Registration />} />
            <Route path="/customerHome" element={<CustomerHome />} />
            {/* <Route
              path="/customerHome"
              element={<CustomerHome songs={songs} />}
            /> */}
            <Route
              path="/premiumCustomerHome"
              element={<PremiumCustomerHome />}
            />
            <Route path="/adminHome" element={<AdminHome />} />
            <Route path="/createPlaylists" element={<CreatePlaylist />} />
            <Route path="/viewPlaylists" element={<DisplayPlaylists />} />
            <Route path="/viewSongs" element={<DisplaySongs />} />
            <Route path="/newSong" element={<NewSong />} />
            <Route path="/edit-song/:id" element={<NewSong />} />
            <Route path="/pay" element={<Pay />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
