package com.poupeapp.PoupeApp.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.poupeapp.PoupeApp.entity.Postagem;

public interface PostagemRepository extends CrudRepository<Postagem, Integer>{
	List<Postagem> findAllByTitulo(String titulo);
}
