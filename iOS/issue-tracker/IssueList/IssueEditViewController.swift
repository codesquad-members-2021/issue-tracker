//
//  IssueEditViewController.swift
//  issue-tracker
//
//  Created by 박혜원 on 2021/06/09.
//

import UIKit

class IssueEditViewController: UIViewController {

    @IBOutlet weak var additionalInfoTable: UITableView!
    @IBOutlet weak var textContent: UITextView!
    
    private var tableDelegate = AdditionalTableDelegate()
    private var tableDataSource = AdditionalTableViewDataSource()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.additionalInfoTable.delegate = tableDelegate
        self.additionalInfoTable.dataSource = tableDataSource
        self.textContent.delegate = self
        
        registerNib()
        configureTable()
    }
    
    private func registerNib(){
        additionalInfoTable.register(UINib(nibName: AdditionalTableViewCell.nibName, bundle: nil),
                                     forCellReuseIdentifier: AdditionalTableViewCell.reuseIdentifier)
        
    }
    
    private func configureTable(){
        self.additionalInfoTable.translatesAutoresizingMaskIntoConstraints = false
        self.additionalInfoTable.tableFooterView = UIView()
    }

    @objc
    func insertPhoto(){
        
    }
}
extension IssueEditViewController: UITextViewDelegate {
    
    func textViewDidBeginEditing(_ textView: UITextView) {
        let menuItem = UIMenuItem(title: "Insert Photo", action: #selector(insertPhoto))
        UIMenuController.shared.menuItems = [menuItem]
    }
}
