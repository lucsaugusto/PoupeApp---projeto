package com.poupeapp.PoupeApp.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.poupeapp.PoupeApp.entity.Comentario;
import com.poupeapp.PoupeApp.repository.ComentarioRepository;
import com.poupeapp.PoupeApp.services.IComentarioService;

@Service
public class ComentarioServiceImpl implements IComentarioService{

	@Autowired
	private ComentarioRepository repository;
	
	@Override
	public Comentario insertOrUpdate(Comentario entity) {
		return repository.save(entity);
	}

	@Override
	public void delete(int id) {
		this.repository.deleteById(id);
	}

	@Override
	public List<Comentario> getAll() {
		return (List<Comentario>) this.repository.findAll();
	}

	@Override
	public Comentario getById(int id) {
		return this.repository.findById(id).orElse(null);
	}

}
