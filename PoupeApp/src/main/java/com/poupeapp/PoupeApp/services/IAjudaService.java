package com.poupeapp.PoupeApp.services;

import java.util.List;

import com.poupeapp.PoupeApp.entity.Ajuda;

public interface IAjudaService {
	Ajuda insertOrUpdate(Ajuda entity);
	
	void delete (int id);
	
	List<Ajuda> getAll();
	
	Ajuda getById(int id);
}
