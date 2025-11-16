package dev.nekko.LogicBackendNekko.Entity;

import javax.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UpdateTimestamp;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "produto")
public class Product {
    
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private UUID id;
    
    @Column(nullable = false, length = 100)
    private String nome;
    
    @Column(columnDefinition = "TEXT")
    private String descricao;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal preco;
    
    @Column(nullable = false, length = 20)
    @Enumerated(EnumType.STRING)
    private ProductCondition condicao;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_categoria", nullable = false)
    private Category categoria;
    
    @Column(nullable = false)
    private Boolean ativo = true;
    
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    // Enum para condição do produto
    public enum ProductCondition {
        NOVO, SEMI_NOVO, USADO, DEFEITO
    }
    
    // Construtores
    public Product() {}
    
    public Product(String nome, String descricao, BigDecimal preco, ProductCondition condicao, Category categoria) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.condicao = condicao;
        this.categoria = categoria;
    }
    
    // Getters e Setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }
    
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    
    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }
    
    public BigDecimal getPreco() { return preco; }
    public void setPreco(BigDecimal preco) { this.preco = preco; }
    
    public ProductCondition getCondicao() { return condicao; }
    public void setCondicao(ProductCondition condicao) { this.condicao = condicao; }
    
    public Category getCategoria() { return categoria; }
    public void setCategoria(Category categoria) { this.categoria = categoria; }
    
    public Boolean getAtivo() { return ativo; }
    public void setAtivo(Boolean ativo) { this.ativo = ativo; }
    
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    
    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}