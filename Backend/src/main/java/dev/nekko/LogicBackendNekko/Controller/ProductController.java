package dev.nekko.LogicBackendNekko.Controller;

import dev.nekko.LogicBackendNekko.Model.Product;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {

    private List<Product> products = new ArrayList<>();
    private Long nextId = 1L;

    // GET - Listar todos os produtos
    @GetMapping
    public List<Product> getAllProducts() {
        System.out.println("Listando todos os produtos: " + products.size() + " produtos");
        return products;
    }

    // GET - Listar apenas produtos ativos
    @GetMapping("/active")
    public List<Product> getActiveProducts() {
        List<Product> activeProducts = products.stream()
                .filter(Product::getAtivo)
                .collect(Collectors.toList());
        System.out.println("Listando produtos ativos: " + activeProducts.size() + " produtos");
        return activeProducts;
    }

    // GET - Buscar produto por ID
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        Optional<Product> product = products.stream()
                .filter(p -> p.getId().equals(id))
                .findFirst();
        System.out.println("Buscando produto ID " + id + ": " + product.orElse(null));
        return product.orElse(null);
    }

    // GET - Buscar produtos por nome (busca parcial)
    @GetMapping("/search")
    public List<Product> searchProductsByName(@RequestParam String nome) {
        List<Product> foundProducts = products.stream()
                .filter(p -> p.getNome().toLowerCase().contains(nome.toLowerCase()))
                .collect(Collectors.toList());
        System.out.println("Buscando produtos com nome '" + nome + "': " + foundProducts.size() + " encontrados");
        return foundProducts;
    }

    // GET - Buscar produtos por condição
    @GetMapping("/condition/{condicao}")
    public List<Product> getProductsByCondition(@PathVariable String condicao) {
        List<Product> foundProducts = products.stream()
                .filter(p -> p.getCondicao().equalsIgnoreCase(condicao))
                .collect(Collectors.toList());
        System.out.println("Buscando produtos com condição '" + condicao + "': " + foundProducts.size() + " encontrados");
        return foundProducts;
    }

    // POST - Criar novo produto
    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        product.setId(nextId++);
        product.setCreatedAt(LocalDateTime.now());
        product.setUpdatedAt(LocalDateTime.now());
        product.setAtivo(true);
        products.add(product);
        System.out.println("Produto criado: " + product);
        return product;
    }

    // PUT - Atualizar produto
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        Optional<Product> productOptional = products.stream()
                .filter(p -> p.getId().equals(id))
                .findFirst();

        if (productOptional.isPresent()) {
            Product product = productOptional.get();
            product.setNome(productDetails.getNome());
            product.setDescricao(productDetails.getDescricao());
            product.setCondicao(productDetails.getCondicao());
            product.setPreco(productDetails.getPreco());
            product.setUpdatedAt(LocalDateTime.now());
            System.out.println("Produto atualizado: " + product);
            return product;
        }
        System.out.println("Produto não encontrado para atualização ID: " + id);
        return null;
    }

    // PATCH - Ativar/Desativar produto
    @PatchMapping("/{id}/toggle")
    public Product toggleProductStatus(@PathVariable Long id) {
        Optional<Product> productOptional = products.stream()
                .filter(p -> p.getId().equals(id))
                .findFirst();

        if (productOptional.isPresent()) {
            Product product = productOptional.get();
            product.setAtivo(!product.getAtivo());
            product.setUpdatedAt(LocalDateTime.now());
            System.out.println("Status do produto alterado: " + product);
            return product;
        }
        System.out.println("Produto não encontrado para alteração de status ID: " + id);
        return null;
    }

    // DELETE - Deletar produto (desativar)
    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable Long id) {
        Optional<Product> productOptional = products.stream()
                .filter(p -> p.getId().equals(id))
                .findFirst();

        if (productOptional.isPresent()) {
            Product product = productOptional.get();
            product.setAtivo(false);
            product.setUpdatedAt(LocalDateTime.now());
            System.out.println("Produto desativado: " + product);
            return "Produto desativado com sucesso";
        }
        System.out.println("Produto não encontrado para deleção ID: " + id);
        return "Produto não encontrado";
    }

    // DELETE - Deletar produto permanentemente
    @DeleteMapping("/{id}/permanent")
    public String permanentDeleteProduct(@PathVariable Long id) {
        boolean removed = products.removeIf(p -> p.getId().equals(id));
        
        if (removed) {
            System.out.println("Produto removido permanentemente ID: " + id);
            return "Produto removido permanentemente";
        }
        System.out.println("Produto não encontrado para remoção permanente ID: " + id);
        return "Produto não encontrado";
    }
}
