import React from 'react';
import Header from "../components/Header";

export default function DisplayPlaylists() {
    return (
      <>
      <Header></Header>
        <div>
          <h1 className="text-center display-6">All Playlists</h1>
          <table border>
            <thead>
              <tr>
                <th>Name</th>
                <th>Songs</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td> </td>
                <td>
                  <ul>
                    <li>
                      <span></span>
                      <audio controls autoplay>
                        <source src="" type="audio/mpeg"></source>
                      </audio>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
}
