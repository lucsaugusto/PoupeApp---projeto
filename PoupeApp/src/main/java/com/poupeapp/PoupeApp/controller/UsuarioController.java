package com.poupeapp.PoupeApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.poupeapp.PoupeApp.entity.Usuario;
import com.poupeapp.PoupeApp.services.IUsuarioService;

@RestController
@CrossOrigin("*")
public class UsuarioController {
	@Autowired
	private IUsuarioService service;
	
	@PostMapping("/usuario")
	public ResponseEntity<Usuario> post(@RequestBody Usuario entity){
		try {
			Usuario usuarioSalvo = this.service.insertOrUpdate(entity);
			return ResponseEntity.ok(usuarioSalvo);
		}catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}
	
	@PutMapping("/usuario")
	public ResponseEntity<Usuario> put(@RequestBody Usuario entity){
		try {
			Usuario usuarioSalvo = this.service.insertOrUpdate(entity);
			return ResponseEntity.ok(usuarioSalvo);
		}catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}
	
	@DeleteMapping("/usuario/{id}")
	public ResponseEntity<String> delete(@PathVariable int id){
		if(this.service.getById(id) == null)
			return ResponseEntity.notFound().build();
		
		try {
			this.service.delete(id);
			return ResponseEntity.ok("Removido com sucesso.");
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}
	
	@GetMapping("/usuario/{id}")
	public ResponseEntity<Usuario> getById(@PathVariable int id){
		Usuario usuario = this.service.getById(id);
		
		if(usuario == null)
			return ResponseEntity.notFound().build();
		
		return ResponseEntity.ok(usuario);
	}
	
	@GetMapping("/usuario")
	public ResponseEntity<List<Usuario>> getAll(){
		return ResponseEntity.ok(this.service.getAll());
	}
	
	@GetMapping("/usuario/nome/{nome}")
	public ResponseEntity<List<Usuario>> getAllByNome(@PathVariable String nome){
		List<Usuario> usuarios = this.service.getAllByNome(nome);
		
		if(usuarios == null)
			return ResponseEntity.notFound().build();
		
		return ResponseEntity.ok(usuarios);
	}
}
