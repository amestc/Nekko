package dev.nekko.LogicBackendNekko.Entity;

import javax.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UpdateTimestamp;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "usuarios")
public class EntityUser {
    
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private UUID id;
    
    @Column(nullable = false, length = 100)
    private String nome;
    
    @Column(unique = true, nullable = false, length = 14)
    private String cpf;
    
    @Column(name = "data_nascimento", nullable = false)
    private LocalDate dataNascimento;
    
    @Column(length = 15)
    private String telefone;
    
    @Column(unique = true, nullable = false, length = 100)
    private String email;
    
    @Column(name = "senha_hash", nullable = false, length = 255)
    private String senhaHash;
    
    @Column(columnDefinition = "DECIMAL(10,2) DEFAULT 0.00")
    private BigDecimal saldo = BigDecimal.ZERO;
    
    @Column(nullable = false)
    private Boolean ativo = true;
    
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    // Construtores
    public EntityUser() {}
    
    public EntityUser(String nome, String cpf, LocalDate dataNascimento, String email, String senhaHash) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.email = email;
        this.senhaHash = senhaHash;
    }
    
    // Getters e Setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }
    
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    
    public String getCpf() { return cpf; }
    public void setCpf(String cpf) { this.cpf = cpf; }
    
    public LocalDate getDataNascimento() { return dataNascimento; }
    public void setDataNascimento(LocalDate dataNascimento) { this.dataNascimento = dataNascimento; }
    
    public String getTelefone() { return telefone; }
    public void setTelefone(String telefone) { this.telefone = telefone; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public String getSenhaHash() { return senhaHash; }
    public void setSenhaHash(String senhaHash) { this.senhaHash = senhaHash; }
    
    public BigDecimal getSaldo() { return saldo; }
    public void setSaldo(BigDecimal saldo) { this.saldo = saldo; }
    
    public Boolean getAtivo() { return ativo; }
    public void setAtivo(Boolean ativo) { this.ativo = ativo; }
    
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    
    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}