package com.testalper.springboot.dao;

import java.util.List;

import com.testalper.springboot.model.User;

public interface UserDAO {
	
	List<User> get();
	
	User get(int id);
	
	void save(User user);
	
	void delete(int id);
	

}
