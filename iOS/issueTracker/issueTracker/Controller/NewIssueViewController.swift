//
//  NewIssue.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/10.
//

import UIKit

class NewIssueViewController: UIViewController {
    @IBOutlet weak var conditionTableView: UITableView!
    private let cellTitles = ["레이블", "마일스톤", "담당자"]
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationItem.largeTitleDisplayMode = .never
        setupSegmentControl(items: [SegmentItemTitle.markdown.description, SegmentItemTitle.preview.description])
        self.conditionTableView.dataSource = self
        self.conditionTableView.delegate = self
    }
    func setupSegmentControl(items: [String]) {
        let uisegmentControl = UISegmentedControl(items: items)
        uisegmentControl.selectedSegmentIndex = 0
        self.navigationItem.titleView = uisegmentControl
    }
    func setupNavigationRightButton() {
    }
}

extension NewIssueViewController: UITableViewDataSource, UITableViewDelegate {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.cellTitles.count
    }
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = UITableViewCell()
        cell.textLabel?.text = cellTitles[indexPath.row]
        let cellSelectImage = UIImageView(image: UIImage(systemName: ButtonImagesTitle.next.description))
        cell.addSubview(cellSelectImage)
        cellSelectImage.translatesAutoresizingMaskIntoConstraints = false
        cellSelectImage.centerYAnchor.constraint(equalTo: cell.centerYAnchor).isActive = true
        cellSelectImage.trailingAnchor.constraint(equalTo: cell.trailingAnchor, constant: -16).isActive = true
        return cell
    }
    func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        let customHeaderView = CustomSectionHeader(frame: .zero)
        customHeaderView.set(color: .white)
        customHeaderView.initCustomLabelforNewIssue(title: "추가정보", size: 22)
        return customHeaderView
    }
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return (tableView.frame.height) / 3
    }
}

enum SegmentItemTitle: CustomStringConvertible {
    case markdown
    case preview
    var description: String {
        switch self {
        case .markdown:
            return "마크다운"
        case .preview:
            return "미리보기"
        }
    }
}
