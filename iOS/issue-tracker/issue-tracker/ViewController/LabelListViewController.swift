import UIKit
import Combine

class LabelListViewController: UIViewController {

    @IBOutlet weak var labelTableView: UITableView!
    private let labelListViewModel = LabelListViewModel()
    private var subscriptions = Set<AnyCancellable>()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureNavigationTitle()
        configureAddButton()
        labelTableView.register(LabelTableViewCell.nib, forCellReuseIdentifier: LabelTableViewCell.identifier)
        bind()
    }
    
    private func bind() {
        labelListViewModel.didUpdateIssueList()
            .sink { [weak self] _ in
                self?.labelTableView.reloadData()
            }.store(in: &subscriptions)
        labelListViewModel.fetchLabelList()
    }
    
    private func configureNavigationTitle() {
        self.navigationController?.navigationBar.prefersLargeTitles = true
        self.navigationController?.navigationBar.largeTitleTextAttributes = [NSAttributedString.Key.font: UIFont.systemFont(ofSize: 34, weight: UIFont.Weight(700))]
        self.navigationItem.title = "레이블"
    }
    
    private func configureAddButton() {
        let buttonImage = UIImage(systemName: "plus")
        let button = UIButton(type: .system)
        button.setImage(buttonImage, for: .normal)
        button.setTitle("추가 ", for: .normal)
        button.semanticContentAttribute = .forceRightToLeft
        button.addTarget(self, action: #selector(showNewLabelView), for: .touchUpInside)
        let selectButton = UIBarButtonItem(customView: button)
        self.navigationItem.rightBarButtonItem = selectButton
    }
    
    @objc func showNewLabelView() {
        // 레이블 추가 화면으로 전환하기
    }
    
}

extension LabelListViewController: UITableViewDataSource, UITableViewDelegate {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return labelListViewModel.getDetailLabelCount()
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: LabelTableViewCell.identifier, for: indexPath) as? LabelTableViewCell else {
            return UITableViewCell()
        }
        
        cell.configure(detailLabel: labelListViewModel.getDetailLabel(indexPath: indexPath))
        return cell
    }
    
}
