package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.PlaylistDto;
import com.example.demo.entities.Playlist;
import com.example.demo.services.PlaylistService;
import com.example.demo.services.SongService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PlaylistController {
	public PlaylistController(SongService songService, PlaylistService playlistService) {
		super();
		this.songService = songService;
		this.playlistService = playlistService;
	}

	@Autowired
	SongService songService;
	@Autowired
	PlaylistService playlistService;
	
//	@GetMapping("/createPlaylist")
//	public String createPlaylist(Model model) {
//		List<Song> songList =  songService.fetchAllSongs();
//		model.addAttribute("songs", songList);
//		return "createPlayList";
//	}
	
	@PostMapping("/createPlaylist")
    public ResponseEntity<PlaylistDto> addPlaylist(@RequestBody PlaylistDto playlistDto) {
        // Your logic to add a play list
        // Ensure that you set the ID to 0 or null in your DTO to let the database generate the ID
        // You can use a DTO (Data Transfer Object) to receive the data from the frontend

        if (playlistService.playlistExists(playlistDto.getName())) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        PlaylistDto savedPlaylist = playlistService.addPlaylist(playlistDto);
        return new ResponseEntity<>(savedPlaylist, HttpStatus.CREATED);
    }
	
//	@PostMapping("/addPlaylist")
//	public String addPlaylist(@ModelAttribute Playlist playlist) {
//		playlistService.addPlaylist(playlist);
//		
//		List<Song> songList =  playlist.getSongs();
//		for(Song s: songList) {
//			s.getPlaylist().add(playlist);
//			//update song object in database
//			songService.updateSong(s);
//		}
//		return "adminHome";
//	}
	
	@GetMapping("/viewPlaylists")
	public String viewPlaylists(Model model) {
		List<Playlist> allPlaylists = playlistService.fetchAllPlaylists();
		model.addAttribute("allPlaylists", allPlaylists);
		return "displayPlaylists";
	}
	
	
}
