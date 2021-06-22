import Foundation
import Combine

class UserInfoViewModel {
    @Published private var thumbnailImage: String
    private var fetchUserInfoUseCase: FetchUserInfoUseCase
    private var subscriptions: Set<AnyCancellable>

    init() {
        self.thumbnailImage = ""
        self.fetchUserInfoUseCase = FetchUserInfoUseCase()
        self.subscriptions = Set<AnyCancellable>()
    }
    
    func configureThumbnailImage() {
        fetchUserInfoUseCase.executeFetchingUserInfo { imageURL in
            self.thumbnailImage = imageURL
        }
    }
    
    func didUpdateThumbnailImage(completion: @escaping (String) -> Void) {
        $thumbnailImage
            .receive(on: DispatchQueue.main)
            .sink { value in
                completion(value)
            }.store(in: &subscriptions)
    }
}
