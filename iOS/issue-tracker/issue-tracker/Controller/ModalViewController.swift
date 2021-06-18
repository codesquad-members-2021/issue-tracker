//
//  ModalViewController.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/13.
//

import UIKit

class ModalViewController: UIViewController {

    @IBOutlet weak var tableView: UITableView!
    private let labelText = ["레이블", "마일스톤", "이슈 편집", "이슈 닫기", "열린 이슈"]
    private let supplementary = ["document", "없음", "pencil", "archivebox", "trash"]

    override func viewDidLoad() {
        super.viewDidLoad()

        view.layer.cornerRadius = 15
        setupGestureRecognizers()
    }

    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        let height: CGFloat = 353 + bottomSafeAreaHeight
        view.frame = CGRect(x: 0, y: view.frame.height - height, width: view.frame.width, height: height)
    }
}

private extension ModalViewController {
    func setupGestureRecognizers() {
        let tapRecognizer = UITapGestureRecognizer(target: self, action: #selector(handleTap(gestureRecognizer:)))
        view.addGestureRecognizer(tapRecognizer)
    }
}

// MARK: - GestureRecognizerSelectors
private extension ModalViewController {
    @objc func handleTap(gestureRecognizer: UITapGestureRecognizer) {
        dismiss(animated: true)
    }
}

extension ModalViewController: UITableViewDataSource, UITableViewDelegate {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return labelText.count
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
        cell.textLabel?.text = labelText[indexPath.row]
        switch indexPath.row {
        case 0, 1:
            cell.detailTextLabel?.text = supplementary[indexPath.row]
        case 2, 3, 4:
            cell.accessoryView = UIImageView(image: UIImage(systemName: supplementary[indexPath.row]))
        default:
            break
        }
        return cell
    }
}

class DetailTextStyleTableViewCell: UITableViewCell {
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: .value1, reuseIdentifier: reuseIdentifier)
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
}
