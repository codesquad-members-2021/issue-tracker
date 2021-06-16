//
//  FilterTableViewController.swift
//  Issue-Trackker
//
//  Created by 심영민 on 2021/06/10.
//

import UIKit

class FilterTableViewController: UITableViewController {
    
    enum SectionTitle: CustomStringConvertible, CaseIterable {
        case state, writter, label

        var description: String {
            switch self {
            case .state:
                return "상태"
            case .writter:
                return "작성자"
            case .label:
                return "레이블"
            }
        }
    }
    
    enum IssueState: CustomStringConvertible, CaseIterable {
        case open, closed, write, assign, comment
        
        var description: String {
            switch self {
            case .open:
                return "열린 이슈"
            case .closed:
                return "닫힌 이슈"
            case .write:
                return "내가 작성한 이슈"
            case .assign:
                return "나에게 할당된 이슈"
            case .comment:
                return "내가 댓글을 남긴 이슈"
            }
        }
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        configureNavigationItem()
    }
    
    private func configureNavigationItem() {
        self.navigationItem.title = "필터"

        self.navigationController?.navigationBar.barTintColor = .systemGray4
        self.navigationController?.navigationBar.isTranslucent = false
        
        let leftButton = UIButton.makeButton(image: "Icon.png", title: " 취소")
        leftButton.addTarget(self, action: #selector(cancelButtonTouched(_:)), for: .touchUpInside)
        
        let rightButton = UIButton.makeButton(image: nil, title: "저장")
        rightButton.addTarget(self, action: #selector(saveButtonTouched(_:)), for: .touchUpInside)

        self.navigationItem.leftBarButtonItem = UIBarButtonItem(customView: leftButton)
        self.navigationItem.rightBarButtonItem = UIBarButtonItem(customView: rightButton)
    }
    
    @objc func cancelButtonTouched(_ sender: UIButton) {
        self.dismiss(animated: true, completion: nil)
    }
    
    @objc func saveButtonTouched(_ sender: UIButton) {
        
    }
    // MARK: - Table view data source

    override func numberOfSections(in tableView: UITableView) -> Int {
        return SectionTitle.allCases.count
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        switch section {
        case 0:
            return IssueState.allCases.count
        case 1:
            return 3
        case 2:
            return 3
        default:
            return 0
        }
    }
    
    override func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        switch section {
        case 0:
            return SectionTitle.state.description
        case 1:
            return SectionTitle.writter.description
        case 2:
            return SectionTitle.label.description
        default :
            return nil
        }
    }

    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "FilterCell", for: indexPath)

        cell.textLabel?.text = "나중에 적을거야"

        return cell
    }
}
