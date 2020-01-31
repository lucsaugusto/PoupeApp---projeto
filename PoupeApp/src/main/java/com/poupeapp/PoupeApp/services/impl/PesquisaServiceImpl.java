package com.poupeapp.PoupeApp.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.poupeapp.PoupeApp.entity.Pesquisa;
import com.poupeapp.PoupeApp.repository.PesquisaRepository;
import com.poupeapp.PoupeApp.services.IPesquisaService;

@Service
public class PesquisaServiceImpl implements IPesquisaService{

	@Autowired
	private PesquisaRepository repository;
	
	@Override
	public Pesquisa insertOrUpdate(Pesquisa entity) {
		return repository.save(entity);
	}

	@Override
	public void delete(int id) {
		this.repository.deleteById(id);
	}

	@Override
	public List<Pesquisa> getAll() {
		return (List<Pesquisa>) this.repository.findAll();
	}

	@Override
	public Pesquisa getById(int id) {
		return this.repository.findById(id).orElse(null);
	}

}
