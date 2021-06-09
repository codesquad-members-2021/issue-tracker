import Foundation
import RxSwift

protocol MemoryStorageType {
    
    @discardableResult
    func create(_ title:String, _ comment:String) -> Observable<Issue>
    
    @discardableResult
    func issueList() -> Observable<[Issue]>
    
    @discardableResult
    func update(_ issue:Issue, _ title:String, _ comment:String) -> Observable<Issue>
    
    @discardableResult
    func delete(_ issue:Issue) -> Observable<Issue>
}
