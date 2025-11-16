package dev.nekko.LogicBackendNekko.Entity;

import dev.nekko.LogicBackendNekko.Model.User;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UpdateTimestamp;
import java.time.LocalDateTime;
import java.util.UUID;
import javax.persistence.*;

@Entity
@Table(name = "anuncio")
public class Announcement {
    
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private UUID id;
    
    @Column(nullable = false, length = 200)
    private String titulo;
    
    @Column(columnDefinition = "TEXT")
    private String descricao;
    
    @Column(nullable = false)
    private Boolean disponivel = true;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_user_proprietario", nullable = false)
    private User proprietario;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_produto", nullable = false)
    private Product produto;
    
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    // ... Construtores, Getters e Setters
}