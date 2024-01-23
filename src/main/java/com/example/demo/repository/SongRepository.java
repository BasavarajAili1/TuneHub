package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Song;

public interface SongRepository extends JpaRepository<Song, Integer> {

	public Song findByName(String name);
	
	public Song findById(int id);
	
	public Song findByLink(String link);
	
	public void deleteByName(String name);

}
