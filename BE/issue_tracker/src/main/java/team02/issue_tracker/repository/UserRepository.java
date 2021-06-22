package team02.issue_tracker.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.oauth.dto.SocialLogin;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
  
    @Override
    Optional<User> findById(Long id);

    User findUserByOauthResourceAndUsername(
            SocialLogin oauthResource, String username);
}
