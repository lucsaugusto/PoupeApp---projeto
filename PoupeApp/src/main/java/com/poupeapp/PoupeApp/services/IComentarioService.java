package com.poupeapp.PoupeApp.services;

import java.util.List;

import com.poupeapp.PoupeApp.entity.Comentario;

public interface IComentarioService {
	Comentario insertOrUpdate(Comentario entity);
	
	void delete (int id);
	
	List<Comentario> getAll();
	
	Comentario getById(int id);
}
