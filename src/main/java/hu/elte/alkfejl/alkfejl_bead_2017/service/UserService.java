package hu.elte.alkfejl.alkfejl_bead_2017.service;

import hu.elte.alkfejl.alkfejl_bead_2017.model.User;
import hu.elte.alkfejl.alkfejl_bead_2017.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void register(User user) {
        userRepository.save(user);
    }

    public boolean isValid(User user) {
        return userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword()).isPresent();
    }
}