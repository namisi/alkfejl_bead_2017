package hu.elte.alkfejl.alkfejl_bead_2017;

import hu.elte.alkfejl.alkfejl_bead_2017.config.AuthInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class AlkfejlBead2017Application extends WebMvcConfigurerAdapter {

	@Autowired
	private AuthInterceptor authInterceptor;

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		// without this the @Role annotation does not work
		registry.addInterceptor(authInterceptor);
	}

	public static void main(String[] args) {
		SpringApplication.run(AlkfejlBead2017Application.class, args);
	}
}
