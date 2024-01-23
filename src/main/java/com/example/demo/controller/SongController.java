package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.SongDto;
import com.example.demo.entities.Song;
import com.example.demo.services.SongService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SongController {
	
	@Autowired
	SongService service;

	public SongController(SongService service) {
		super();
		this.service = service;
	}

	//ADD SONG REST API
	@PostMapping("/addSong")
	public ResponseEntity<SongDto> addSong(@RequestBody SongDto songDto) {
		if (service.SongExists(songDto.getLink()) == true) {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}

		SongDto savedSong =  service.addSong(songDto);
		return new ResponseEntity<>(savedSong, HttpStatus.CREATED);
	}
	
	//GET SONG REST API
	@GetMapping("{id}")
	public ResponseEntity<Song> getSongById(@PathVariable("id") int id){
		Song song = service.getSongById(id);
		return ResponseEntity.ok(song);
	}

	//VIEW ALL SONGS REST API
	@GetMapping("/viewSongs")
	public ResponseEntity<List<Song>> viewSongs() {
		try {
	        System.out.println("Call for fetching songs");
	        List<Song> songsList = service.fetchAllSongs();
	        System.out.println("Call for fetching songs");
	        return ResponseEntity.ok(songsList);
	    } catch (Exception e) {
	    	System.out.println("Error Call for fetching songs");
	        e.printStackTrace();
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	    }
	}

	//UPDATE SONG REST API
	@PutMapping("{id}")
	public ResponseEntity<SongDto> updateSong(@PathVariable("id") int id, 
			@RequestBody SongDto updatedSong){
		SongDto songDto =  service.updateSong(id, updatedSong);
		return ResponseEntity.ok(songDto);
	}

	//DELETE SONG REST API
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteSong(@PathVariable("id") int id) {
		service.deleteSong(id);
		return ResponseEntity.ok("Song is deleted successfully!");
	}

	@GetMapping("/playSongs")
	public String playSongs(Model model) {
		boolean premiumUser = true;

		if(premiumUser) {
			List<Song> songsList = service.fetchAllSongs();
			model.addAttribute("songs", songsList);
			return "displaySongs";
		}else {
			return "makePayment";
		}
	}




}
