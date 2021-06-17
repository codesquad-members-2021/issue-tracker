import Foundation

struct JWTDTO: Decodable {
    let data: JWT
}

struct JWT: Decodable {
    let jwt: String
    let error: String?
}
