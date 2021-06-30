import Foundation
import Combine

class UserInfoViewModel {
    
    @Published private var thumbnailImage: String
    @Published private var errorMessage: NetworkError?
    private let defaultUserInfoUseCase: UserInfoUseCase
    private var subscriptions: Set<AnyCancellable>

    init(userInfoUseCase: UserInfoUseCase) {
        self.thumbnailImage = ""
        self.errorMessage = nil
        self.defaultUserInfoUseCase = userInfoUseCase
        self.subscriptions = Set<AnyCancellable>()
    }
    
    func fetchThumbnailImage() {
        defaultUserInfoUseCase.executeFetchingUserInfo { result in
            switch result {
            case .failure(let error):
                self.errorMessage = error
            case .success(let imageURL):
                self.thumbnailImage = imageURL
            }
        }
    }
    
    func didUpdateThumbnailImage() -> AnyPublisher<String, Never> {
        return $thumbnailImage
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }
    
    func didUpdateErrorMessage() -> AnyPublisher<NetworkError?, Never> {
        return $errorMessage
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }
    
}
