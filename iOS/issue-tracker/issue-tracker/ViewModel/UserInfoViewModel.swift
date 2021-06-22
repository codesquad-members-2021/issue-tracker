import Foundation
import Combine

class UserInfoViewModel {
    
    @Published private var thumbnailImage: String
    private let fetchUserInfoUseCase: FetchUserInfoUseCase
    private var subscriptions: Set<AnyCancellable>

    init() {
        self.thumbnailImage = ""
        self.fetchUserInfoUseCase = FetchUserInfoUseCase()
        self.subscriptions = Set<AnyCancellable>()
    }
    
    func fetchThumbnailImage() {
        fetchUserInfoUseCase.executeFetchingUserInfo { result in
            switch result {
            case .failure(let error):
                print(error)
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
    
}
