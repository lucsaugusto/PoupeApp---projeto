package com.poupeapp.PoupeApp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Ajuda {

	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idAjuda;
	
	@Column(length = 100)
	private String nome;
	
	@Column(length = 100)
	private String email;
	
	@Column(length = 100)
	private String mensagem;
	
	@ManyToOne
	@JsonIgnoreProperties("ajuda")
	private Usuario usuario;

	public int getIdAjuda() {
		return idAjuda;
	}

	public void setIdAjuda(int idAjuda) {
		this.idAjuda = idAjuda;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMensagem() {
		return mensagem;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	
}
