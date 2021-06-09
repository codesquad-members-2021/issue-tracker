import Foundation
import RxSwift
import RxCocoa

class IssueListViewModel: NSObject {
    
    private let storage = MemoryStorage()
    
    var issueList: Driver<[IssueInfo]> {
        return storage.issueList()
    }
    
    func getIssueList() {
        APIService.get(API.getOpenIssue)
            .subscribe(onNext: { [weak self] issue in
                self?.storage.append(issue.issues)
            }, onError: { error in
                print(error.localizedDescription)
            }).disposed(by: rx.disposeBag)
    }
}
