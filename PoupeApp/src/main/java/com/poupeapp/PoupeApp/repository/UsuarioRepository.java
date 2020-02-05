package com.poupeapp.PoupeApp.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.poupeapp.PoupeApp.entity.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Integer>{
	List<Usuario> findAllByNome(String nome);
	
	Usuario findUsuarioByEmailAndSenha(String email, String senha);
}
