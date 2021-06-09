//
//  IssueEditViewController.swift
//  issue-tracker
//
//  Created by 박혜원 on 2021/06/09.
//

import UIKit

class IssueEditViewController: UIViewController, UITableViewDelegate {

    @IBOutlet weak var additionalInfoTable: UITableView!
    
    private var tableDelegate = AdditionalTableDelegate()
    private var tableDataSource = AdditionalTableViewDataSource()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.additionalInfoTable.delegate = tableDelegate
        self.additionalInfoTable.dataSource = tableDataSource
        
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

}
