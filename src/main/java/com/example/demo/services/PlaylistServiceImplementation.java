package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.PlaylistDto;
import com.example.demo.entities.Playlist;
import com.example.demo.mapper.PlaylistMapper;
import com.example.demo.repository.PlaylistRepository;

@Service
public class PlaylistServiceImplementation implements PlaylistService{
	@Autowired
	PlaylistRepository repo;
	
	//REST API FOR ADD PLAYLIST
	@Override
	public PlaylistDto addPlaylist(PlaylistDto playlistDto) {
		Playlist playlist = PlaylistMapper.mapToPlaylist(playlistDto);
		Playlist savedPlaylist = repo.save(playlist);
		return PlaylistMapper.mapToPlaylistDto(savedPlaylist);
	}

	@Override
	public List<Playlist> fetchAllPlaylists() {
		return repo.findAll();
	}

	//REST API FOR CHECKING IF PLAYLIST EXISTS
	@Override
	public boolean playlistExists(String name) {
		Playlist playlist = repo.findByName(name);
		if(playlist == null) {
			return false;
		}
		return true;
	}

}
