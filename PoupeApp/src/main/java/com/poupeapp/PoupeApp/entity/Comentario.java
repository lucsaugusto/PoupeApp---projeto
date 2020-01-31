package com.poupeapp.PoupeApp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Comentario {
	
	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idComentario;
	
	@Column(length = 100)
	private String texto;
	
	@ManyToOne
	@JsonIgnoreProperties("comentario")
	private Usuario usuario;
	
	@ManyToOne
	@JsonIgnoreProperties("comentario")
	private Postagem postagem;

	public int getIdComentario() {
		return idComentario;
	}

	public void setIdComentario(int idComentario) {
		this.idComentario = idComentario;
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

	public Postagem getPostagem() {
		return postagem;
	}

	public void setPostagem(Postagem postagem) {
		this.postagem = postagem;
	}
	
}
