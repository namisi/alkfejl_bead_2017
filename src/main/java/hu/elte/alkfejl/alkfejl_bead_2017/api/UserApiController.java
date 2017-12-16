package hu.elte.alkfejl.alkfejl_bead_2017.api;

import hu.elte.alkfejl.alkfejl_bead_2017.model.User;
import hu.elte.alkfejl.alkfejl_bead_2017.service.UserService;
import hu.elte.alkfejl.alkfejl_bead_2017.service.annotations.Role;
import hu.elte.alkfejl.alkfejl_bead_2017.service.exceptions.UserNotValidException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static hu.elte.alkfejl.alkfejl_bead_2017.model.User.Role.ADMIN;
import static hu.elte.alkfejl.alkfejl_bead_2017.model.User.Role.USER;

@RestController
@RequestMapping("/api/user")
public class UserApiController {

    private final UserService userService;

    @Autowired
    public UserApiController(UserService userService) {
        this.userService = userService;
    }

    @Role({USER, ADMIN})
    @GetMapping
    public ResponseEntity<User> user() {
        if (userService.isLoggedIn()) {
            return ResponseEntity.ok(userService.getUser());
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        try {
            return ResponseEntity.ok(userService.login(user));
        } catch (UserNotValidException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/logout")
    public ResponseEntity logout() {
        this.userService.setUser(null);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        return ResponseEntity.ok(userService.register(user));
    }
}