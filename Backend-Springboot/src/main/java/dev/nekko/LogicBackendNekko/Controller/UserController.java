package dev.nekko.LogicBackendNekko.Controller;

import dev.nekko.LogicBackendNekko.Model.User;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private List<User> users = new ArrayList<>();
    private Long nextId = 1L;

    // GET - Listar todos os usuários
    @GetMapping
    public List<User> getAllUsers() {
        System.out.println("Listando todos os usuários: " + users);
        return users;
    }

    // GET - Buscar usuário por ID
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        Optional<User> user = users.stream().filter(u -> u.getId().equals(id)).findFirst();
        System.out.println("Buscando usuário ID " + id + ": " + user.orElse(null));
        return user.orElse(null);
    }

    // POST - Criar novo usuário
    @PostMapping
    public User createUser(@RequestBody User user) {
        user.setId(nextId++);
        user.setCreatedAt(LocalDateTime.now());
        user.setUpdatedAt(LocalDateTime.now());
        user.setAtivo(true);
        users.add(user);
        System.out.println("Usuário criado: " + user);
        return user;
    }

    // PUT - Atualizar usuário
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        Optional<User> userOptional = users.stream().filter(u -> u.getId().equals(id)).findFirst();

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setUsername(userDetails.getUsername());
            user.setCpf(userDetails.getCpf());
            user.setEmail(userDetails.getEmail());
            user.setTelefone(userDetails.getTelefone());
            user.setSenha(userDetails.getSenha());
            user.setDataNascimento(userDetails.getDataNascimento());
            user.setUpdatedAt(LocalDateTime.now());
            System.out.println("Usuário atualizado: " + user);
            return user;
        }
        System.out.println("Usuário não encontrado para atualização ID: " + id);
        return null;
    }

    // DELETE - Deletar usuário (desativar)
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id) {
        Optional<User> userOptional = users.stream().filter(u -> u.getId().equals(id)).findFirst();

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setAtivo(false);
            user.setUpdatedAt(LocalDateTime.now());
            System.out.println("Usuário desativado: " + user);
            return "Usuário desativado com sucesso";
        }
        System.out.println("Usuário não encontrado para deleção ID: " + id);
        return "Usuário não encontrado";
    }

    // GET - Buscar usuário por username
    @GetMapping("/username/{username}")
    public User getUserByUsername(@PathVariable String username) {
        Optional<User> user = users.stream()
                .filter(u -> u.getUsername().equalsIgnoreCase(username))
                .findFirst();
        System.out.println("Buscando usuário por username '" + username + "': " + user.orElse(null));
        return user.orElse(null);
    }

    // GET - Buscar usuário por email
    @GetMapping("/email/{email}")
    public User getUserByEmail(@PathVariable String email) {
        Optional<User> user = users.stream()
                .filter(u -> u.getEmail().equalsIgnoreCase(email))
                .findFirst();
        System.out.println("Buscando usuário por email '" + email + "': " + user.orElse(null));
        return user.orElse(null);
    }
}