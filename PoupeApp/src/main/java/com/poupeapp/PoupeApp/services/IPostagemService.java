package com.poupeapp.PoupeApp.services;

import java.util.List;

import com.poupeapp.PoupeApp.entity.Postagem;

public interface IPostagemService {
	Postagem insertOrUpdate(Postagem entity);
	
	void delete (int id);
	
	List<Postagem> getAll();
	
	Postagem getById(int id);
	
	List<Postagem> getAllByTitulo(String titulo);
}
