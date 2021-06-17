import Foundation
import Combine

class FetchUserInfoUseCase {
    
    private let endPoint: EndPoint
    private let networkManager: NetworkManager
    private var subscriptions: Set<AnyCancellable>
    
    init() {
        self.endPoint = EndPoint()
        self.networkManager = NetworkManager()
        self.subscriptions = Set<AnyCancellable>()
    }
    
    func executeFetchingUserInfo(completion: @escaping (String) -> Void) {
        let url = endPoint.makeUserInfoURL()
        networkManager.get(with: url, type: UserInfoResponDTO.self)
            .sink { result in
                switch result {
                case .failure(_):
                    completion("networkFail")
                case .finished:
                    break
                }
            } receiveValue: { userInfoResponDTO in
                print(userInfoResponDTO, "========")
                guard let data = userInfoResponDTO.data else {
                    return
                }
                print(data, "data============")
                completion(data.profileImage)
            }.store(in: &subscriptions)
    }
}
