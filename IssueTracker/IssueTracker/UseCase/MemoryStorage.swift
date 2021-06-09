import Foundation
import RxSwift
import RxCocoa

class MemoryStorage: MemoryStorageType {
    
    private var list:[Issue] = []
    private lazy var store = PublishRelay<[Issue]>()
    
    @discardableResult
    func create(_ title: String, _ comment: String, _ assignees: [Int], _ labels: [Int], _ milestone: Int) -> Observable<Issue> {
        let issue = Issue(title: title, comment: comment, assignees: assignees, labels: labels, milestone: milestone)
        list.append(issue)
        store.accept(list)
        return Observable.just(issue)
    }
    
    @discardableResult
    func issueList() -> Driver<[Issue]> {
        return store.asDriver(onErrorJustReturn: [])
    }
    
    @discardableResult
    func update(_ issue: Issue, _ title: String, _ comment: String, _ assignees: [Int], _ labels: [Int], _ milestone: Int) -> Observable<Issue> {
        let updated = Issue(title: title, comment: comment, assignees: assignees, labels: labels, milestone: milestone)
        if let index = list.firstIndex(where: { $0 == issue}) {
            list.remove(at: index)
            list.append(updated)
        }
        store.accept(list)
        return Observable.just(updated)
    }
    
    @discardableResult
    func delete(_ issue: Issue) -> Observable<Issue> {
        if let index = list.firstIndex(where: { $0 == issue }) {
            list.remove(at: index)
        }
        store.accept(list)
        return Observable.just(issue)
    }
    
    
}
