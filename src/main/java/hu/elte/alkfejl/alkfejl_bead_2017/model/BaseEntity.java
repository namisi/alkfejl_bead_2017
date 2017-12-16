package hu.elte.alkfejl.alkfejl_bead_2017.model;

import lombok.Data;

import javax.persistence.*;

@Data
@MappedSuperclass
public class BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Version
    private int version;
}
