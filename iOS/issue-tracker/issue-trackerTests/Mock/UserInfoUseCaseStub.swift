import Foundation

class UserInfoUseCaseStub: UserInfoUseCase {
    
    var success: Bool
    var result: String
    
    init(success: Bool) {
        self.success = success
        self.result = "success"
    }
    
    func executeFetchingUserInfo(completion: @escaping (Result<String, NetworkError>) -> Void) {
        switch success {
        case true:
            completion(Result.success(self.result))
        case false:
            completion(Result.failure(.networkConnection))
        }
    }
    
}
