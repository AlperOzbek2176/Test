package com.testalper.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.testalper.springboot.model.User;
import com.testalper.springboot.service.UserService;

@Controller
@RestController
@RequestMapping("/register")
public class UserController {
	
	@Autowired
	private UserService userService;

	@GetMapping("/user")
	public List<User> get() {
		return userService.get();
	}

	@PostMapping("/user")
	public User save(@RequestBody User userObj) {
		userService.save(userObj);
		return userObj;
	}

	@GetMapping("/user/{id}")
	public User get(@PathVariable int id) {
		User userObj = userService.get(id);
		if(userObj == null) {
			throw new RuntimeException("User with id"+id+"is not found");
		}
		return userObj;
	}

	@DeleteMapping("/user/{id}")
	public String delete(@PathVariable int id) {
		userService.delete(id);
		return "User removed with id " + id;

	}

	@PutMapping("/user")
	public User update(@RequestBody User userObj) {
		userService.save(userObj);
		return userObj;
	}

}
