package dev.nekko.LogicBackendNekko.Controller;

import dev.nekko.LogicBackendNekko.Model.User;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private List<User> usuarios;
    private int proximoId;

    public void UserControler() {
        this.usuarios = new ArrayList<>();
        this.proximoId = 1;
    }

    public boolean cadastrarUsuario(String nome, String email, String senha) {
        if (nome == null || nome.trim().isEmpty()) {
            System.out.println("Nome não pode ser vazio!");
            return false;
        }

        if (email == null || email.trim().isEmpty()) {
            System.out.println("Email não pode ser vazio!");
            return false;
        }

        if (senha == null || senha.length() < 6) {
            System.out.println("Senha deve ter pelo menos 6 caracteres!");
            return false;
        }

        if (emailExiste(email)) {
            System.out.println("Email já cadastrado!");
            return false;
        }

        User usuario = new User(nome, email, senha);
        usuario.setId(proximoId++);
        usuarios.add(usuario);

        System.out.println("Usuário cadastrado com sucesso!");
        return true;
    }

    private boolean emailExiste(String email) {
        for (User usuario : usuarios) {
            if (usuario.getEmail().equalsIgnoreCase(email)) {
                return true;
            }
        }
        return false;
    }

    public void listarUsuarios() {
        if (usuarios.isEmpty()) {
            System.out.println("Nenhum usuário cadastrado.");
            return;
        }

        System.out.println("\n=== LISTA DE USUÁRIOS ===");
        for (User usuario : usuarios) {
            System.out.println(usuario);
        }
    }

    public User buscarUsuarioPorEmail(String email) {
        for (User usuario : usuarios) {
            if (usuario.getEmail().equalsIgnoreCase(email)) {
                return usuario;
            }
        }
        return null;
    }

    public boolean autenticarUsuario(String email, String senha) {
        User usuario = buscarUsuarioPorEmail(email);
        if (usuario != null && usuario.getSenha().equals(senha)) {
            System.out.println("Usuário autenticado com sucesso!");
            return true;
        }
        System.out.println("Email ou senha incorretos!");
        return false;
    }

    public List<User> getUsuarios() {
        return new ArrayList<>(usuarios); // Retorna cópia para evitar modificações externas
    }

}
