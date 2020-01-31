package com.poupeapp.PoupeApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.poupeapp.PoupeApp.entity.Pesquisa;
import com.poupeapp.PoupeApp.services.IPesquisaService;

@RestController
@CrossOrigin("*")
public class PesquisaController {
	@Autowired
	private IPesquisaService service;
	
	@PostMapping("/pesquisa")
	public ResponseEntity<Pesquisa> post(@RequestBody Pesquisa entity){
		try {
			Pesquisa pesquisaSalvo = this.service.insertOrUpdate(entity);
			return ResponseEntity.ok(pesquisaSalvo);
		}catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}
	
	@PutMapping("/pesquisa")
	public ResponseEntity<Pesquisa> put(@RequestBody Pesquisa entity){
		try {
			Pesquisa pesquisaSalvo = this.service.insertOrUpdate(entity);
			return ResponseEntity.ok(pesquisaSalvo);
		}catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}
	
	@DeleteMapping("/pesquisa/{id}")
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
	
	@GetMapping("/pesquisa/{id}")
	public ResponseEntity<Pesquisa> getById(@PathVariable int id){
		Pesquisa pesquisa = this.service.getById(id);
		
		if(pesquisa == null)
			return ResponseEntity.notFound().build();
		
		return ResponseEntity.ok(pesquisa);
	}
	
	@GetMapping("/pesquisa")
	public ResponseEntity<List<Pesquisa>> getAll(){
		return ResponseEntity.ok(this.service.getAll());
	}
}
