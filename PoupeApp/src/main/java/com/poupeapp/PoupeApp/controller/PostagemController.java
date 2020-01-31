package com.poupeapp.PoupeApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.poupeapp.PoupeApp.entity.Postagem;
import com.poupeapp.PoupeApp.services.IPostagemService;

@RestController
@CrossOrigin("*")
public class PostagemController {
	@Autowired
	private IPostagemService service;

	@PostMapping("/postagem")
	public ResponseEntity<Postagem> post(@RequestBody Postagem entity){
		try {
			Postagem postagemSalvo = this.service.insertOrUpdate(entity);
			return ResponseEntity.ok(postagemSalvo);
		}catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}
	
	@PutMapping("/postagem")
	public ResponseEntity<Postagem> put(@RequestBody Postagem entity){
		try {
			Postagem postagemSalvo = this.service.insertOrUpdate(entity);
			return ResponseEntity.ok(postagemSalvo);
		}catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}
	
	@DeleteMapping("/postagem/{id}")
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
	
	@GetMapping("/postagem/{id}")
	public ResponseEntity<Postagem> getById(@PathVariable int id){
		Postagem postagem = this.service.getById(id);
		
		if(postagem == null)
			return ResponseEntity.notFound().build();
		
		return ResponseEntity.ok(postagem);
	}
	
	@GetMapping("/postagem")
	public ResponseEntity<List<Postagem>> getAll(){
		return ResponseEntity.ok(this.service.getAll());
	}
	
	@GetMapping("/postagem/palavra/{palavra}")
	public ResponseEntity<List<Postagem>> getAllByTitulo(@PathVariable String titulo){
		List<Postagem> postagens = this.service.getAllByTitulo(titulo);
		
		if(postagens == null)
			return ResponseEntity.notFound().build();
		
		return ResponseEntity.ok(postagens);
	}
}
