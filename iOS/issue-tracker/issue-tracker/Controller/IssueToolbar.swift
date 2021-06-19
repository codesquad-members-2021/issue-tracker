//
//  IssueToolbar.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/11.
//

import UIKit

final class IssueToolbar: UIToolbar {

    private let checkBoxBarButtonItem: UIBarButtonItem = {
        var item = UIBarButtonItem()
        item.image = UIImage(systemName: "checkmark.circle")
        return item
    }()

    private let closeIssueBarButtonItem: UIBarButtonItem = {
        var item = UIBarButtonItem()
        item.image = UIImage(systemName: "archivebox")
        return item
    }()

    private let labelBarButtonItem: UIBarButtonItem = {
        var item = UIBarButtonItem()
        item.title = "이슈를 선택하세요"
        item.isEnabled = false
        return item
    }()

    private let flexibleBarButtonItem: UIBarButtonItem = {
        var item = UIBarButtonItem(barButtonSystemItem: .flexibleSpace, target: nil, action: nil)
        return item
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        setupToolbar()
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setupToolbar()
    }

    private func setupToolbar() {
        let items = [checkBoxBarButtonItem, flexibleBarButtonItem, labelBarButtonItem, flexibleBarButtonItem, closeIssueBarButtonItem]
        setItems(items, animated: false)
    }
}
