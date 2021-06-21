import Foundation

struct UserInfoResponDTO: Decodable {
    
    let data: UserInfoDTO?
    let error: String?
    
}

struct UserInfoDTO: Decodable {
    
    let id: Int
    let oauthResource: String
    let email: String?
    let profileImage: String
    let username: String
    
    enum CodingKeys: String, CodingKey {
        case id
        case oauthResource = "oauth_resource"
        case email
        case profileImage = "profile_image"
        case username
    }
    
}
