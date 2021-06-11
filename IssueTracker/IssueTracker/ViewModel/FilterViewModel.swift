import Foundation
import RxSwift
import RxCocoa

class FilterViewModel: NSObject {
 
    private let storage = FilterMemoryStorage()
    
    lazy var filterList: Driver<[SectionOfFilterList]> = {
        return storage.filterList()
    }()
    
}
