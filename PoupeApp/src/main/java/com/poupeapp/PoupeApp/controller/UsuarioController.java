package com.poupeapp.PoupeApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.poupeapp.PoupeApp.entity.Usuario;
import com.poupeapp.PoupeApp.security.Autenticacao;
import com.poupeapp.PoupeApp.security.Token;
import com.poupeapp.PoupeApp.services.IUsuarioService;

@RestController
@CrossOrigin("*")
public class UsuarioController {
	@Autowired
	private IUsuarioService service;
	
	
	@PostMapping("/usuario/login")
    public ResponseEntity<Token> loginUser(@RequestBody Usuario usuario){
    	Usuario usuarioLogado = service.autenticarUsuario(usuario);
    	if (usuarioLogado != null) {
    		Token token = Autenticacao.generateToken(usuarioLogado);
    		return ResponseEntity.ok(token);
    	}
    	else {
    		return ResponseEntity.status(403).build();
    	}
    }
	
	@GetMapping("/usuario/info")
	public ResponseEntity<Usuario> loginInfo(@RequestParam String token){
		if(token != null) {
			if(Autenticacao.isValid(token)) {
				Usuario usuario = Autenticacao.extractUser(token);
				return ResponseEntity.ok(usuario);
			}
			return ResponseEntity.status(403).build();
		}
		return ResponseEntity.notFound().build();
	}
	
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
