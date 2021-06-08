import UIKit

class IssueListViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
    }
}

extension IssueListViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 4
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: IssueTableViewCell.identifier) as? IssueTableViewCell else { return UITableViewCell()
        }

        return cell
    }
}
