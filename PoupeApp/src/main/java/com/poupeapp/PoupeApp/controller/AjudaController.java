package com.poupeapp.PoupeApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.poupeapp.PoupeApp.entity.Ajuda;
import com.poupeapp.PoupeApp.services.IAjudaService;


@RestController
@CrossOrigin("*")
public class AjudaController {
	
	@Autowired
	private IAjudaService service;
	
	@PostMapping("/ajuda")
	public ResponseEntity<Ajuda> post(@RequestBody Ajuda entity){
		try {
			Ajuda ajudaSalvo = this.service.insertOrUpdate(entity);
			return ResponseEntity.ok(ajudaSalvo);
		}catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}
	
	@PutMapping("/ajuda")
	public ResponseEntity<Ajuda> put(@RequestBody Ajuda entity){
		try {
			Ajuda ajudaSalvo = this.service.insertOrUpdate(entity);
			return ResponseEntity.ok(ajudaSalvo);
		}catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}
	
	@DeleteMapping("/ajuda/{id}")
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
	
	@GetMapping("/ajuda/{id}")
	public ResponseEntity<Ajuda> getById(@PathVariable int id){
		Ajuda ajuda = this.service.getById(id);
		
		if(ajuda == null)
			return ResponseEntity.notFound().build();
		
		return ResponseEntity.ok(ajuda);
	}
	
	@GetMapping("/ajuda")
	public ResponseEntity<List<Ajuda>> getAll(){
		return ResponseEntity.ok(this.service.getAll());
	}
}
