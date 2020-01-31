package com.poupeapp.PoupeApp.services;

import java.util.List;

import com.poupeapp.PoupeApp.entity.Pesquisa;

public interface IPesquisaService {
	Pesquisa insertOrUpdate(Pesquisa entity);
	
	void delete (int id);
	
	List<Pesquisa> getAll();
	
	Pesquisa getById(int id);
}
