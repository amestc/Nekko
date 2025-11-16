package dev.nekko.LogicBackendNekko.Model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "produto")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String nome;
    
    @Column(columnDefinition = "TEXT")
    private String descricao;
    
    @Column(nullable = false, length = 20)
    private String condicao;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal preco;
    
    @Column(nullable = false)
    private Boolean ativo = true;
    
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    // Construtor vazio (obrigatório para JPA)
    public Product() {}

    // Construtor com parâmetros
    public Product(String nome, String descricao, String condicao, BigDecimal preco) {
        this.nome = nome;
        this.descricao = descricao;
        this.condicao = condicao;
        this.preco = preco;
    }

    // Getters e Setters
    public Long getId() { 
        return id; 
    }
    
    public void setId(Long id) { 
        this.id = id; 
    }
    
    public String getNome() { 
        return nome; 
    }
    
    public void setNome(String nome) { 
        this.nome = nome; 
    }
    
    public String getDescricao() { 
        return descricao; 
    }
    
    public void setDescricao(String descricao) { 
        this.descricao = descricao; 
    }
    
    public String getCondicao() { 
        return condicao; 
    }
    
    public void setCondicao(String condicao) { 
        this.condicao = condicao; 
    }
    
    public BigDecimal getPreco() { 
        return preco; 
    }
    
    public void setPreco(BigDecimal preco) { 
        this.preco = preco; 
    }
    
    public Boolean getAtivo() { 
        return ativo; 
    }
    
    public void setAtivo(Boolean ativo) { 
        this.ativo = ativo; 
    }
    
    public LocalDateTime getCreatedAt() { 
        return createdAt; 
    }
    
    public void setCreatedAt(LocalDateTime createdAt) { 
        this.createdAt = createdAt; 
    }
    
    public LocalDateTime getUpdatedAt() { 
        return updatedAt; 
    }
    
    public void setUpdatedAt(LocalDateTime updatedAt) { 
        this.updatedAt = updatedAt; 
    }

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", descricao='" + descricao + '\'' +
                ", condicao='" + condicao + '\'' +
                ", preco=" + preco +
                ", ativo=" + ativo +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                '}';
    }
}