import Foundation

struct Label: Decodable {
    let id:Int
    let name:String
    let colorCode:String
    let description:String
    let checked:Bool
}
