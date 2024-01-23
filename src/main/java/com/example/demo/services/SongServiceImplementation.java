package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.SongDto;
import com.example.demo.entities.Song;
import com.example.demo.mapper.SongMapper;
import com.example.demo.repository.SongRepository;

@Service
public class SongServiceImplementation implements SongService{
	@Autowired
	SongRepository repo;
	
	public SongServiceImplementation(SongRepository repo) {
		super();
		this.repo = repo;
	}

	@Override
	public SongDto addSong(SongDto songDto) {
		Song song = SongMapper.mapToSong(songDto);
		Song savedSong =  repo.save(song);
		return SongMapper.mapToSongDto(savedSong);
	}
	
	@Override
	public List<Song> fetchAllSongs() {
	    try {
	        System.out.println("Call for fetching songs");
	        return repo.findAll();
	    } catch (Exception e) {
	        e.printStackTrace(); // Log the exception
	        throw e; // re-throw the exception or handle it appropriately
	    }
	}


	@Override
	public boolean SongExists(String link) {
		Song song = repo.findByLink(link);
		if(song == null) {
			return false;
		}
		else {
			return true;
		}
	}

	@Override
	public SongDto updateSong(int id, SongDto updatedSong) {
//		Song song =  repo.findByName(name);
		Song song = repo.findById(id);
		song.setName(updatedSong.getName());
		song.setArtist(updatedSong.getArtist());
		song.setGenre(updatedSong.getGenre());
		song.setLink(updatedSong.getLink());
		Song updatedSongObj =  repo.save(song);
		return SongMapper.mapToSongDto(updatedSongObj);
	}

	@Override
	public void deleteSong(int id) {
//		Song song = repo.findByName(name);
//		repo.delete(song);
//		System.out.println("Call for delete song");
		Song song = repo.findById(id);
		repo.deleteById(song.getId());
	}

	@Override
	public Song getSongById(int id) {
		Song song = repo.findById(id);
		return song;
	}

}
