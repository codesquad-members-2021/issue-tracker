//
//  IssueDataSource.swift
//  IssueTracker
//
//  Created by Lia on 2021/06/08.
//

import UIKit

class IssueDataSource: NSObject {
    
    private var viewModel: IssueViewModel
    
    init(viewModel: IssueViewModel) {
        self.viewModel = viewModel
        super.init()
    }
    
}


extension IssueDataSource: UITableViewDataSource {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return viewModel.issues.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: IssueCell.reuseIdentifier, for: indexPath) as? IssueCell else { return UITableViewCell() }
        
//        cell.fillUI()
        
        return cell
    }
    
}


