import Foundation
import RxSwift
import RxCocoa

protocol MemoryStorageType {
    
    @discardableResult
    func append(_ issues:[IssueInfo]) -> Observable<[IssueInfo]>
    
    @discardableResult
    func issueList() -> Driver<[IssueInfo]>
}
