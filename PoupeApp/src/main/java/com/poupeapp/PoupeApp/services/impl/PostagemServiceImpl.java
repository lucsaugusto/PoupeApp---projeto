package com.poupeapp.PoupeApp.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.poupeapp.PoupeApp.entity.Postagem;
import com.poupeapp.PoupeApp.repository.PostagemRepository;
import com.poupeapp.PoupeApp.services.IPostagemService;

@Service
public class PostagemServiceImpl implements IPostagemService{
	
	@Autowired
	private PostagemRepository repository;
	
	@Override
	public Postagem insertOrUpdate(Postagem entity) {
		return repository.save(entity);
	}

	@Override
	public void delete(int id) {
		this.repository.deleteById(id);
	}

	@Override
	public List<Postagem> getAll() {
		return (List<Postagem>) this.repository.findAll();
	}

	@Override
	public Postagem getById(int id) {
		return this.repository.findById(id).orElse(null);
	}

	@Override
	public List<Postagem> getAllByTitulo(String titulo) {
		return this.repository.findAllByTitulo(titulo);
	}

}
