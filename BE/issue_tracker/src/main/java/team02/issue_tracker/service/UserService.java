package team02.issue_tracker.service;

import org.springframework.stereotype.Service;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User enroll(User user) {
        return userRepository.save(user);
    }

    public User findByUser(User user) {
        return userRepository.findUserByOauthResourceAndUsername(
                user.getOauthResource(), user.getUsername());
    }
}
