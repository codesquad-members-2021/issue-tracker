import Foundation

struct JWTResponseDTO: Decodable {
    
    let data: JWTDTO
    
}

struct JWTDTO: Decodable {
    
    let jwt: String
    let error: String?
    
}
