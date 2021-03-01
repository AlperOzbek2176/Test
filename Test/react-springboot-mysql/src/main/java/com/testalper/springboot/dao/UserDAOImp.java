package com.testalper.springboot.dao;

import java.util.List;


import javax.persistence.EntityManager;

import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.testalper.springboot.model.User;

@Repository
public class UserDAOImp implements UserDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public List<User> get() {

		Session currentSession = entityManager.unwrap(Session.class);
		Query<User> query = currentSession.createQuery("from User", User.class);
		List<User> list = query.getResultList();
		return list;

	}

	@Override
	public User get(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		User usersObj = currentSession.get(User.class, id);
		return usersObj;
	}

	@Override
	public void save(User user) {
		Session currentSession = entityManager.unwrap(Session.class);
		currentSession.saveOrUpdate(user);

	}

	@Override
	public void delete(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		User userObj = currentSession.get(User.class, id);
		currentSession.delete(userObj);

	}

}
