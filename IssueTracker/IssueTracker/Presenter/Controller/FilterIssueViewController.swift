import UIKit
import RxSwift
import RxCocoa
import NSObject_Rx
import RxDataSources

class FilterIssueViewController: UIViewController {

    @IBOutlet weak var cancelButton: UIButton!
    @IBOutlet weak var filterTableView: UITableView!
    
    private let dataSource = RxTableViewSectionedReloadDataSource<SectionOfFilterList>(configureCell: { dataSource, tableView, indexPath, item in
        let cell = tableView.dequeueReusableCell(withIdentifier: CellID.filter, for: indexPath)
        cell.textLabel?.text = item.mainInfo
        return cell
    })
    
    private let viewModel = FilterViewModel()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupIssueCancelButton()
        setupDataSource()
    }
    
    private func setupIssueCancelButton() {
        cancelButton.rx.tap
            .subscribe(onNext: { [weak self] in
                self?.dismiss(animated: true, completion: nil)
            }).disposed(by: rx.disposeBag)
    }
    
    private func setupDataSource() {
        dataSource.titleForHeaderInSection = { dataSource, indexPath in
            return dataSource.sectionModels[indexPath].header
        }
        viewModel.filterList
            .drive(filterTableView.rx.items(dataSource: dataSource))
            .disposed(by: rx.disposeBag)
    }
}
