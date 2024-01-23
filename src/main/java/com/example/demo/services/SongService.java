package com.example.demo.services;

import java.util.List;

import com.example.demo.dto.SongDto;
import com.example.demo.entities.Song;

public interface SongService {

//	public void addSong(Song song);
	public SongDto addSong(SongDto songDto);

	public List<Song> fetchAllSongs();
	
	public Song getSongById(int id);

	public boolean SongExists(String link);
	
	public SongDto updateSong(int id, SongDto updatedSong);
	
	public void deleteSong(int id);

}
