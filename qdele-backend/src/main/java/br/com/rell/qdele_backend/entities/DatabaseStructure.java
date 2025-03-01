package br.com.rell.qdele_backend.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "database_structure")
public class DatabaseStructure {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String structure;

    @Column(name = "database_connection_id", nullable = false)
    private Long databaseConnectionId;

    @Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT FALSE")
    private Boolean deleted;

}
