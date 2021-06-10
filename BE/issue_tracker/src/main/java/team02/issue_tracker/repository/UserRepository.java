package team02.issue_tracker.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import team02.issue_tracker.domain.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

}
