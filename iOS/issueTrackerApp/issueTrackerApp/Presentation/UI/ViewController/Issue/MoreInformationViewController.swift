//
//  MoreInformationViewController.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/11.
//

import UIKit

class MoreInformationViewController: UIViewController, AddIssueViewModelType, MainCoordinated {
    
    @IBOutlet private weak var tableView: UITableView!
    private var dataSource: MoreInfoTableViewDataSource?
    private var addIssueViewModel: AddIssueViewModel!
    weak var mainCoordinator: MainFlowCoordinator?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        guard let moreInfos = addIssueViewModel?.moreInfos else { return }
        let dataSource = MoreInfoTableViewDataSource(moreInfos: moreInfos)
        self.dataSource = dataSource
        tableView.dataSource = dataSource
        tableView.reloadData()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        mainCoordinator?.configure(viewController: segue.destination)
    }
    
    func setAddIssueViewModel(_ addIssueViewModel: AddIssueViewModel) {
        self.addIssueViewModel = addIssueViewModel
    }
}
