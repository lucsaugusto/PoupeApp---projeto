package com.poupeapp.PoupeApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.poupeapp.PoupeApp.entity.Comentario;
import com.poupeapp.PoupeApp.services.IComentarioService;


@RestController
@CrossOrigin("*")
public class ComentarioController {
	@Autowired
	private IComentarioService service;
	
	@PostMapping("/comentario")
	public ResponseEntity<Comentario> post(@RequestBody Comentario entity){
		try {
			Comentario comentarioSalvo = this.service.insertOrUpdate(entity);
			return ResponseEntity.ok(comentarioSalvo);
		}catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}
	
	@PutMapping("/comentario")
	public ResponseEntity<Comentario> put(@RequestBody Comentario entity){
		try {
			Comentario comentarioSalvo = this.service.insertOrUpdate(entity);
			return ResponseEntity.ok(comentarioSalvo);
		}catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}
	
	@DeleteMapping("/comentario/{id}")
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
	
	@GetMapping("/comentario/{id}")
	public ResponseEntity<Comentario> getById(@PathVariable int id){
		Comentario comentario = this.service.getById(id);
		
		if(comentario == null)
			return ResponseEntity.notFound().build();
		
		return ResponseEntity.ok(comentario);
	}
	
	@GetMapping("/comentario")
	public ResponseEntity<List<Comentario>> getAll(){
		return ResponseEntity.ok(this.service.getAll());
	}
}
