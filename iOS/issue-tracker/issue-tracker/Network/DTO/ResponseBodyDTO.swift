import Foundation

struct ResponseBodyDTO: Decodable {
    let data: String?
    let error: String?
}
