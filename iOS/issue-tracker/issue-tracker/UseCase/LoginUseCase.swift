import Foundation
import Combine

class LoginUseCase {
    
    private let jwtManager: JWTManageable
    private let loginHelper: LoginHelper
    private let networkManager: NetworkManager
    private var subscriptions: Set<AnyCancellable>
    
    init() {
        self.jwtManager = JWTManager()
        self.loginHelper = LoginHelper()
        self.networkManager = NetworkManager(requestManager: RequestManager(jwtManager: jwtManager), session: URLSession.shared)
        self.subscriptions = Set<AnyCancellable>()
    }

    func gitHubLoginURL() -> URL? {
        return loginHelper.getGitHubLoginURL()
    }
    
    func callbackURLscheme() -> String {
        return loginHelper.getCallbackURLscheme()
    }
    
    func convertToGitHubLogInURL(from callbackURL: URL) -> URL? {
        let code = self.loginHelper.extractedAuthorizationCode(from: callbackURL)
        return self.loginHelper.convertedToURL(with: code)
    }
    
    func executeGitHubLogIn(url: URL?, completion: @escaping (Bool) -> Void) {
        self.networkManager.sendRequest(with: url, method: .get, type: JWTResponseDTO.self)
            .sink { result in
                switch result {
                case .failure(_):
                    completion(false)
                case .finished:
                    break
                }
            } receiveValue: { [weak self] jwtResponseDTO in
                if self?.jwtManager.set(jwt: jwtResponseDTO.data.jwt) == false {
                    completion(false)
                } else {
                    completion(true)
                }
            }.store(in: &subscriptions)
    }
    
}
