package dev.nekko.LogicBackendNekko.Entity;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "endereco")
public class Address {
    
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private UUID id;
    
    @Column(name = "nome_recebedor", nullable = false, length = 100)
    private String nomeRecebedor;
    
    @Column(nullable = false, length = 200)
    private String rua;
    
    @Column(nullable = false, length = 10)
    private String numero;
    
    @Column(length = 100)
    private String complemento;
    
    @Column(nullable = false, length = 100)
    private String bairro;
    
    @Column(nullable = false, length = 100)
    private String cidade;
    
    @Column(nullable = false, length = 2)
    private String estado;
    
    @Column(nullable = false, length = 9)
    private String cep;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_usuario", nullable = false)
    private EntityUser usuario;
    
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
    // Construtores, Getters e Setters
    public Address() {}
    
    // ... (Getters e Setters similares ao User)
}