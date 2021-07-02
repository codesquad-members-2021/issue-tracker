import UIKit
import Combine

class MilestoneListViewController: UIViewController {

    @IBOutlet weak var milestoneTabelView: UITableView!
    private let milestoneListViewModel = MilestoneListViewModel()
    private var subscriptions = Set<AnyCancellable>()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureNavigationTitle()
        configureAddButton()
        milestoneTabelView.register(MilestoneTableViewCell.nib, forCellReuseIdentifier: MilestoneTableViewCell.identifier)
        bind()
    }
    
    private func bind() {
        milestoneListViewModel.didUpdateMilestoneList()
            .sink { [weak self] _ in
                self?.milestoneTabelView.reloadData()
            }.store(in: &subscriptions)
        milestoneListViewModel.fetchMilestoneList()
    }
    
    private func configureNavigationTitle() {
        self.navigationController?.navigationBar.prefersLargeTitles = true
        self.navigationController?.navigationBar.largeTitleTextAttributes = [NSAttributedString.Key.font: UIFont.systemFont(ofSize: 34, weight: UIFont.Weight(700))]
        self.navigationItem.title = "마일스톤"
    }
    
    private func configureAddButton() {
        let buttonImage = UIImage(systemName: "plus")
        let button = UIButton(type: .system)
        button.setImage(buttonImage, for: .normal)
        button.setTitle("추가 ", for: .normal)
        button.semanticContentAttribute = .forceRightToLeft
        button.addTarget(self, action: #selector(showNewMilestoneView), for: .touchUpInside)
        let selectButton = UIBarButtonItem(customView: button)
        self.navigationItem.rightBarButtonItem = selectButton
    }
    
    @objc func showNewMilestoneView() {
        // 마일스톤 추가 화면으로 전환하기
    }
    
}

extension MilestoneListViewController: UITableViewDataSource, UITableViewDelegate {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return milestoneListViewModel.getDetailMilestoneCount()
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: MilestoneTableViewCell.identifier, for: indexPath) as? MilestoneTableViewCell else {
            return UITableViewCell()
        }
        cell.configure(detailMilestone: milestoneListViewModel.getDetailMilestone(indexPath: indexPath))
        return cell
    }
    
}
