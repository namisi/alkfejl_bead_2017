package hu.elte.alkfejl.alkfejl_bead_2017.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "RENTINGS")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Renting extends BaseEntity {

    @JoinColumn
    @ManyToOne(targetEntity = User.class)
    private User user;

    @JoinColumn
    @OneToOne(targetEntity = Vehicle.class)
    private Vehicle vehicle;

    @Column(nullable = false)
    private Timestamp startDate;

    @Column()
    private Timestamp  endDate;

}
