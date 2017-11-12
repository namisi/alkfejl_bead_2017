package hu.elte.alkfejl.alkfejl_bead_2017.repository;

import hu.elte.alkfejl.alkfejl_bead_2017.model.Vehicle;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VehicleRepository extends CrudRepository<Vehicle, Integer> {

    Optional<Vehicle> findByLicensePlateNr(String licensePlateNr);

}