package com.poupeapp.PoupeApp.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.poupeapp.PoupeApp.entity.Ajuda;
import com.poupeapp.PoupeApp.repository.AjudaRepository;
import com.poupeapp.PoupeApp.services.IAjudaService;

@Service
public class AjudaServiceImpl implements IAjudaService{
	
	@Autowired
	private AjudaRepository repository;
	
	@Override
	public Ajuda insertOrUpdate(Ajuda entity) {
		return repository.save(entity);
	}

	@Override
	public void delete(int id) {
		this.repository.deleteById(id);
	}

	@Override
	public List<Ajuda> getAll() {
		return (List<Ajuda>) this.repository.findAll();
	}

	@Override
	public Ajuda getById(int id) {
		return this.repository.findById(id).orElse(null);
	}
	
}
