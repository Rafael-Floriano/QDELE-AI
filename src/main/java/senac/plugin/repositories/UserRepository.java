package senac.plugin.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import senac.plugin.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
