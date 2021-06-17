//
//  IssueToolbar.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/11.
//

import UIKit

class IssueToolbar: UIToolbar {
    
    let checkBoxBarButtonItem: UIBarButtonItem = {
        var item = UIBarButtonItem()
        item.image = UIImage(systemName: "checkmark.circle")
        return item
    }()
    
    let closeIssueBarButtonItem: UIBarButtonItem = {
        var item = UIBarButtonItem()
        item.image = UIImage(systemName: "archivebox")
        return item
    }()
    
    let labelBarButtonItem: UIBarButtonItem = {
        var item = UIBarButtonItem()
        item.title = "이슈를 선택하세요"
        item.isEnabled = false
        return item
    }()
    
    let flexibleBarButtonItem: UIBarButtonItem = {
        var item = UIBarButtonItem(barButtonSystemItem: .flexibleSpace, target: nil, action: nil)
        return item
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setToolbar()
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setToolbar()
    }
    
    func setToolbar() {
        let items = [checkBoxBarButtonItem, flexibleBarButtonItem, labelBarButtonItem, flexibleBarButtonItem, closeIssueBarButtonItem]
        setItems(items, animated: false)
    }
}
