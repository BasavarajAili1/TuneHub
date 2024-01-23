package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.RegisterDto;
import com.example.demo.entities.Users;
import com.example.demo.mapper.RegisterMapper;
import com.example.demo.repository.UsersRepository;


@Service
public class UsersServiceImplementation implements UsersService {
	public UsersServiceImplementation(UsersRepository repo) {
		super();
		this.repo = repo;
	}
	
	@Autowired
	UsersRepository repo;

	@Override
	public RegisterDto addUser(RegisterDto registerDto) {
		Users user = RegisterMapper.mapToUsers(registerDto);
		Users savedUser =  repo.save(user);
		return RegisterMapper.mapToRegisterDto(savedUser);
	}
	
	@Override
	public boolean emailExists(String email) {
		if(repo.findByEmail(email) == null) {			
			return false;
		}else {
			return true;
		}
	}

	@Override
	public boolean validateUser(String email, String password) {
		Users user = repo.findByEmail(email);
		String db_pass = user.getPassword();
		if(password.equals(db_pass)) {
			return true;
		}else {
			return false;
		}

	}

	@Override
	public String getRole(String email) {
		Users user = repo.findByEmail(email);
		return user.getRole();
	}

	@Override
	public Users getUser(String email) {
		return repo.findByEmail(email);
	}

	@Override
	public void updateUser(Users user) {
		repo.save(user);
	}

	@Override
	public boolean isUserPremium(String email) {
		Users user = repo.findByEmail(email);
        return user != null && user.isPremium();
	}

}
