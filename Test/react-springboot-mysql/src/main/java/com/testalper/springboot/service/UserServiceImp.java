package com.testalper.springboot.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.testalper.springboot.dao.UserDAO;
import com.testalper.springboot.model.User;

@Service
public class UserServiceImp implements UserService {
	
	@Autowired
	private UserDAO userDao;

	@Transactional
	@Override
	public List<User> get() {
		return userDao.get();
	}

	@Transactional
	@Override
	public User get(int id) {
		return userDao.get(id);
	}

	@Transactional
	@Override
	public void save(User employee) {
		userDao.save(employee);
		
	}

	@Transactional
	@Override
	public void delete(int id) {
		userDao.delete(id);
		
	}

}
