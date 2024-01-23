package com.example.demo.services;

import com.example.demo.dto.RegisterDto;
import com.example.demo.entities.Users;

public interface UsersService {
	
	public RegisterDto addUser(RegisterDto registerDto);
	public boolean emailExists(String email);
	public boolean validateUser(String email, String password);
	public String getRole(String email);
	public Users getUser(String email);
	public void updateUser(Users user);
	boolean isUserPremium(String email);
}
