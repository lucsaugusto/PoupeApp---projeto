package com.poupeapp.PoupeApp.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Pesquisa {

	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idPesquisa;
	@Column(length = 100)
	private String texto;
	
	@ManyToOne
	@JsonIgnoreProperties("pesquisa")
	private Usuario usuario;
	
	@OneToMany(mappedBy = "pesquisa", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("pesquisa")
	private List <Postagem> postagem;

	public int getId() {
		return idPesquisa;
	}

	public void setId(int id) {
		this.idPesquisa = id;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public List<Postagem> getPostagem() {
		return postagem;
	}

	public void setPostagem(List<Postagem> postagem) {
		this.postagem = postagem;
	}

	
}
