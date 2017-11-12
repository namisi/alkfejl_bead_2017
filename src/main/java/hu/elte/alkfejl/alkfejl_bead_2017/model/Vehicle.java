package hu.elte.alkfejl.alkfejl_bead_2017.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "VEHICLES")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Vehicle extends BaseEntity {

    @Column(nullable = false, unique = true)
    private String licensePlateNr;

    @Column(nullable = false)
    private String manufacturer;

    @Column()
    private String type;

    @Column()
    private Integer manufactureDate;

    @Column(nullable = false)
    private Integer costPerDay;

}
