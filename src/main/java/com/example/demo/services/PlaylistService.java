package com.example.demo.services;

import java.util.List;

import com.example.demo.dto.PlaylistDto;
import com.example.demo.entities.Playlist;

public interface PlaylistService {

	public PlaylistDto addPlaylist(PlaylistDto playlistDto);
	
	public boolean playlistExists(String name);

	public List<Playlist> fetchAllPlaylists();
}
