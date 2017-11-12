package hu.elte.alkfejl.alkfejl_bead_2017.service;

import hu.elte.alkfejl.alkfejl_bead_2017.model.Renting;
import hu.elte.alkfejl.alkfejl_bead_2017.repository.RentingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RentingService {
    @Autowired
    private RentingRepository rentingRepository;

    public Iterable<Renting> rentings() {
        return rentingRepository.findAll();
    }

    public Renting create(Renting renting) {
        return rentingRepository.save(renting);
    }

    public Renting update(int id, Renting renting) {
        return rentingRepository.save(renting);
    }

    public void delete(int id) {
        rentingRepository.delete(id);
    }

    public Renting get(int id) { return rentingRepository.findOne(id); }
}
