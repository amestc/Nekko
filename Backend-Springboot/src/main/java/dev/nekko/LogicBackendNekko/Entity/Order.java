package dev.nekko.LogicBackendNekko.Entity;

import javax.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UpdateTimestamp;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "pedidos")
public class Order {
    
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private UUID id;
    
    @Column(nullable = false, length = 50)
    @Enumerated(EnumType.STRING)
    private OrderStatus status = OrderStatus.PENDENTE;
    
    @Column(name = "tipo_pagamento", nullable = false, length = 20)
    @Enumerated(EnumType.STRING)
    private PaymentType tipoPagamento;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_pagamento")
    private Payment pagamento;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_anuncio", nullable = false)
    private Announcement anuncio;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_user_comprador", nullable = false)
    private EntityUser comprador;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_endereco_entrega", nullable = false)
    private Address enderecoEntrega;
    
    @Column(name = "valor_total", nullable = false, precision = 10, scale = 2)
    private BigDecimal valorTotal;
    
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    // Enums
    public enum OrderStatus {
        PENDENTE, APROVADO, PROCESSANDO, ENVIADO, ENTREGUE, CANCELADO, REEMBOLSADO
    }
    
    public enum PaymentType {
        CARTAO, PIX
    }
    
    // ... Construtores, Getters e Setters
}