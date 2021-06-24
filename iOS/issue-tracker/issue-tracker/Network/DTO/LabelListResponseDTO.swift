import Foundation

struct LabelListResponseDTO: Decodable {
    
    let data: [LabelDTO]
    let error: String?
    
    func toDomain() -> LabelList {
        return .init(labels: data.map { DetailLabel(id: $0.id, title: $0.title, content: $0.content ?? "", color: $0.color) })
    }
}
