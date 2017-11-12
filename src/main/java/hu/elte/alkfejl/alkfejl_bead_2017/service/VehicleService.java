package hu.elte.alkfejl.alkfejl_bead_2017.service;

import hu.elte.alkfejl.alkfejl_bead_2017.model.Vehicle;
import hu.elte.alkfejl.alkfejl_bead_2017.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VehicleService {
    @Autowired
    private VehicleRepository vehicleRepository;

    public Iterable<Vehicle> vehicles() {
        return vehicleRepository.findAll();
    }

    public Vehicle create(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    public Vehicle update(int id, Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    public void delete(int id) {
        vehicleRepository.delete(id);
    }

    public Vehicle get(int id) {
        return vehicleRepository.findOne(id);
    }

}
