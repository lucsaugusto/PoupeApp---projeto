package com.poupeapp.PoupeApp.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.poupeapp.PoupeApp.entity.Usuario;
import com.poupeapp.PoupeApp.repository.UsuarioRepository;
import com.poupeapp.PoupeApp.services.IUsuarioService;

@Service
public class UsuarioServiceImpl implements IUsuarioService{
	
	@Autowired
	private UsuarioRepository repository;
	
	@Override
	public Usuario insertOrUpdate(Usuario entity) {
		return repository.save(entity);
	}

	@Override
	public void delete(int id) {
		this.repository.deleteById(id);
	}

	@Override
	public List<Usuario> getAll() {
		return (List<Usuario>) this.repository.findAll();
	}

	@Override
	public Usuario getById(int id) {
		return this.repository.findById(id).orElse(null);
	}

	@Override
	public List<Usuario> getAllByNome(String nome) {
		return this.repository.findAllByNome(nome);
	}

	@Override
	public Usuario getUsuarioByEmailAndSenha(String email, String senha) {
		return this.repository.findUsuarioByEmailAndSenha(email, senha);
	}

	@Override
	public Usuario autenticarUsuario(Usuario entity) {
		Usuario usuario = this.getUsuarioByEmailAndSenha(entity.getEmail(), entity.getSenha());
		return usuario;
	}

}
