package hu.elte.alkfejl.alkfejl_bead_2017.api;

import hu.elte.alkfejl.alkfejl_bead_2017.model.Renting;
import hu.elte.alkfejl.alkfejl_bead_2017.service.RentingService;
import hu.elte.alkfejl.alkfejl_bead_2017.service.annotations.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import static hu.elte.alkfejl.alkfejl_bead_2017.model.User.Role.ADMIN;
import static hu.elte.alkfejl.alkfejl_bead_2017.model.User.Role.USER;

@Controller
@RequestMapping("/api/renting")
public class RentingApiController {

    @Autowired
    private RentingService rentingService;

    @Role({ADMIN, USER})
    @GetMapping
    private ResponseEntity<Iterable<Renting>> list() {
        Iterable<Renting> rentings = rentingService.rentings();
        return ResponseEntity.ok(rentings);
    }

    @Role({ADMIN, USER})
    @PostMapping
    private ResponseEntity<Renting> create(@RequestBody Renting renting) {
        Renting saved = rentingService.create(renting);
        return ResponseEntity.ok(saved);
    }

    @Role({ADMIN, USER})
    @GetMapping("/{id}")
    private ResponseEntity<Renting> get(@PathVariable int id) {
        Renting read = rentingService.get(id);
        return ResponseEntity.ok(read);
    }

    @Role({ADMIN, USER})
    @PutMapping("/{id}")
    private ResponseEntity<Renting> update(@PathVariable int id, @RequestBody Renting renting) {
        Renting updated = rentingService.update(id, renting);
        return ResponseEntity.ok(updated);
    }

    @Role(ADMIN)
    @DeleteMapping("/{id}")
    private ResponseEntity delete(@PathVariable int id) {
        rentingService.delete(id);
        return ResponseEntity.ok().build();
    }

}
