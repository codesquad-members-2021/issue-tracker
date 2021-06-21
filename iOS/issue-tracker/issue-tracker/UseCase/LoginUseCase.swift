import Foundation
import Combine

class LoginUseCase {
    
    private let jwtManager: JWTManager
    private let loginManager: LoginManager
    private let networkManager: NetworkManager
    private var subscriptions: Set<AnyCancellable>
    
    init() {
        self.jwtManager = JWTManager()
        self.loginManager = LoginManager()
        self.networkManager = NetworkManager()
        self.subscriptions = Set<AnyCancellable>()
    }

    func gitHubLoginURL() -> URL? {
        return loginManager.getGitHubLoginURL()
    }
    
    func callbackURLscheme() -> String {
        return loginManager.getCallbackURLscheme()
    }
    
    func convertToGitHubLogInURL(from callbackURL: URL) -> URL? {
        let code = self.loginManager.extractedAuthorizationCode(from: callbackURL)
        return self.loginManager.convertedToURL(with: code)
    }
    
    func executeGitHubLogIn(url: URL?, completion: @escaping (Bool) -> Void) {
        self.networkManager.get(with: url, type: JWTResponseDTO.self)
            .sink { result in
                switch result {
                case .failure(_):
                    completion(false)
                case .finished:
                    completion(true)
                }
            } receiveValue: { [weak self] jwtResponseDTO in
                if self?.jwtManager.set(jwt: jwtResponseDTO.data.jwt) == false {
                    completion(false)
                }
            }.store(in: &subscriptions)
    }
    
}
