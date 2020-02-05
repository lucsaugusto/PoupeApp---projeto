package com.poupeapp.PoupeApp.services;

import java.util.List;

import com.poupeapp.PoupeApp.entity.Usuario;

public interface IUsuarioService {
	Usuario insertOrUpdate(Usuario entity);
	
	void delete (int id);
	
	List<Usuario> getAll();
	
	Usuario getById(int id);
	
	List<Usuario> getAllByNome(String nome);
	
	Usuario getUsuarioByEmailAndSenha(String email, String senha);

	Usuario autenticarUsuario(Usuario usuario);
	
}
