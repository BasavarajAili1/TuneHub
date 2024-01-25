package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.RegisterDto;
import com.example.demo.entities.LoginData;
import com.example.demo.entities.Users;
import com.example.demo.services.SongService;
import com.example.demo.services.UsersService;

import jakarta.servlet.http.HttpSession;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UsersController {
	@Autowired
	UsersService service;
	
	@Autowired
	SongService songService;
	
	public UsersController(UsersService service, SongService songService) {
		super();
		this.service = service;
		this.songService = songService;
	}
	
	@PostMapping("/register")
	public ResponseEntity<RegisterDto> addUser(@RequestBody RegisterDto registerDto) {
		RegisterDto savedUser = null;
		System.out.println("Call received for register");
		String email = registerDto.getEmail();

		boolean userStatus = service.emailExists(email);
		if(userStatus == false) {	
			savedUser =  service.addUser(registerDto);
			System.out.println("user added");
			return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
		}
		else {
			System.out.println("user already exists");
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
	}

	
	@PostMapping("/validate")
	public ResponseEntity<String> validate(@RequestBody LoginData data, HttpSession session){
		System.out.println("Call received for user validation");
		String email = data.getEmail();
		String password = data.getPassword();
		
		if((service.validateUser(email, password)) == true) {
			String role = service.getRole(email);
			session.setAttribute("email", email);
			
			if(role.equals("admin")) {
				return ResponseEntity.ok("adminHome");
			}
			else {
				boolean userIsPremium = service.isUserPremium(email);
				if(userIsPremium) {
					return ResponseEntity.ok("premiumCustomerHome");
				}
				return ResponseEntity.ok("customerHome");
			}
		}else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
		}
	}
	
	@GetMapping("/isUserPremium")
	public boolean isUserPremium(@RequestParam String email) {
		System.out.println("Call for checking user premium");
		Users user = service.getUser(email);
		return user != null && user.isPremium();
	}
	
	@DeleteMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        session.invalidate();
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Logout successful");
    }
	
}


//@PostMapping("/validate")
//public String validate(@RequestBody LoginData data, HttpSession session,  Model model){
//	System.out.println("Call received for user validation");
//	String email = data.getEmail();
//	String password = data.getPassword();
//	
//	if((service.validateUser(email, password)) == true) {
//		String role = service.getRole(email);
//		session.setAttribute("email", email);
//		
//		if(role.equals("admin")) {
//			return "adminHome";
//		}
//		else {
//			Users user = service.getUser(email);
//			boolean userStatus = user.isPremium();
//			List<Song> songsList = songService.fetchAllSongs();
//			model.addAttribute("songs", songsList);
//			model.addAttribute("isPremium", userStatus);
//			return "customerHome";
//		}
//	}else {
//		return "login";
//	}
//}