package com.testalper.springboot.service;

import java.util.List;

import com.testalper.springboot.model.User;




public interface UserService {
	

	List<User> get();
	
	User get(int id);
	
	void save(User user);
	
	void delete(int id);
	

}
