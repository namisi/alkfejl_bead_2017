package hu.elte.alkfejl.alkfejl_bead_2017.repository;

import hu.elte.alkfejl.alkfejl_bead_2017.model.Renting;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RentingRepository extends CrudRepository<Renting, Integer> {

}