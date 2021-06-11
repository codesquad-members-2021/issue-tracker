import Foundation
import RxSwift
import RxCocoa

class MemoryStorage: MemoryStorageType {
    
    private var list:[IssueInfo] = []
    private lazy var store = BehaviorRelay<[IssueInfo]>(value: list)
    
    @discardableResult
    func append(_ issues: [IssueInfo]) -> Observable<[IssueInfo]> {
        list.append(contentsOf: issues)
        store.accept(list)
        return Observable.just(issues)
    }
    
    @discardableResult
    func issueList() -> Driver<[IssueInfo]> {
        return store.asDriver(onErrorJustReturn: [])
    }
    
//    @discardableResult
//    func update(_ issue: Issue, _ title: String, _ comment: String, _ assignees: [Int], _ labels: [Int], _ milestone: Int) -> Observable<Issue> {
//        let updated = Issue(title: title, comment: comment, assignees: assignees, labels: labels, milestone: milestone)
//        if let index = list.firstIndex(where: { $0 == issue}) {
//            list.remove(at: index)
//            list.append(updated)
//        }
//        store.accept(list)
//        return Observable.just(updated)
//    }
//
//    @discardableResult
//    func delete(_ issue: Issue) -> Observable<Issue> {
//        if let index = list.firstIndex(where: { $0 == issue }) {
//            list.remove(at: index)
//        }
//        store.accept(list)
//        return Observable.just(issue)
//    }
    
}
