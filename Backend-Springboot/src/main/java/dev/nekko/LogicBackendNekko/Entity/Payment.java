package dev.nekko.LogicBackendNekko.Entity;

import javax.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "pagamentos")
public class Payment {
    
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private UUID id;
    
    @Column(nullable = false, length = 20)
    @Enumerated(EnumType.STRING)
    private PaymentType tipo;
    
    // Campos para cartão
    @Column(name = "numero_cartao", length = 20)
    private String numeroCartao;
    
    @Column(length = 4)
    private String cvc;
    
    @Column(name = "nome_titular", length = 100)
    private String nomeTitular;
    
    @Column(name = "validade_cartao")
    private LocalDate validadeCartao;
    
    // Campos para PIX
    @Column(name = "chave_pix", length = 100)
    private String chavePix;
    
    @Column(name = "tipo_chave_pix", length = 20)
    @Enumerated(EnumType.STRING)
    private PixKeyType tipoChavePix;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_usuario", nullable = false)
    private User usuario;
    
    @Column(nullable = false)
    private Boolean ativo = true;
    
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
    // Enums
    public enum PaymentType {
        CARTAO, PIX
    }
    
    public enum PixKeyType {
        CPF, EMAIL, TELEFONE, ALEATORIA
    }
    
    // ... Construtores, Getters e Setters
}