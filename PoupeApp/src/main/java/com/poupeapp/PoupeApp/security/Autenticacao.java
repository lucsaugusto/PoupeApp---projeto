package com.poupeapp.PoupeApp.security;

import javax.xml.bind.DatatypeConverter;

import com.poupeapp.PoupeApp.entity.Usuario;

public class Autenticacao {
	private static final String PREFIXO="#PoUpEaPp";
	public static Token generateToken(Usuario usuario) {
		Token token = new Token();
		String str = PREFIXO+"|"+usuario.getIdUsuario()+"|"+usuario.getNome()+"|"+usuario.getEmail();
		String strToken = DatatypeConverter.printHexBinary(str.getBytes());
		
		token.setToken(strToken);
		return token;
		
	}
	
	public static boolean isValid(String token) {
		String str = new String(DatatypeConverter.parseHexBinary(token));
		System.out.println("Token decode:"+str);
		String parts[] = str.split("\\|");
		System.out.println(parts.length);
		System.out.println(parts[0].equals(PREFIXO));
		return (parts.length == 4 && parts[0].equals(PREFIXO));
	}
	
	public static Usuario extractUser(String token) {
		String str = new String(DatatypeConverter.parseHexBinary(token));
		String parts[] = str.split("\\|");
		Usuario usuario = new Usuario();
		usuario.setIdUsuario(Integer.parseInt(parts[1]));
		usuario.setNome(parts[2]);
		usuario.setEmail(parts[3]);
		return usuario;
	}
}
