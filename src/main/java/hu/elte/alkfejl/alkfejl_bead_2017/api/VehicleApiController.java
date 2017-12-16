package hu.elte.alkfejl.alkfejl_bead_2017.api;

import hu.elte.alkfejl.alkfejl_bead_2017.model.Vehicle;
import hu.elte.alkfejl.alkfejl_bead_2017.service.VehicleService;
import hu.elte.alkfejl.alkfejl_bead_2017.service.annotations.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import static hu.elte.alkfejl.alkfejl_bead_2017.model.User.Role.ADMIN;
import static hu.elte.alkfejl.alkfejl_bead_2017.model.User.Role.USER;

@Controller
@RequestMapping("/api/vehicle")
public class VehicleApiController {

    @Autowired
    private VehicleService vehicleService;

    @GetMapping
    private ResponseEntity<Iterable<Vehicle>> list() {
        Iterable<Vehicle> vehicles = vehicleService.vehicles();
        return ResponseEntity.ok(vehicles);
    }

    @Role({ADMIN})
    @PostMapping
    private ResponseEntity<Vehicle> create(@RequestBody Vehicle vehicle) {
        Vehicle saved = vehicleService.create(vehicle);
        return ResponseEntity.ok(saved);
    }

    @Role({ADMIN, USER})
    @GetMapping("/{id}")
    private ResponseEntity<Vehicle> get(@PathVariable int id) {
        Vehicle read = vehicleService.get(id);
        return ResponseEntity.ok(read);
    }

    @Role(ADMIN)
    @PutMapping("/{id}")
    private ResponseEntity<Vehicle> update(@PathVariable int id, @RequestBody Vehicle vehicle) {
        Vehicle updated = vehicleService.update(id, vehicle);
        return ResponseEntity.ok(updated);
    }

    @Role(ADMIN)
    @DeleteMapping("/{id}")
    private ResponseEntity delete(@PathVariable int id) {
        vehicleService.delete(id);
        return ResponseEntity.ok().build();
    }

}
