//
//  MoreInformationViewController.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/11.
//

import UIKit

class MoreInformationViewController: UIViewController, Stateful, MainCoordinated {
    
    @IBOutlet private weak var tableView: UITableView!
    private var dataSource: MoreInfoTableViewDataSource?
    var stateController: StateController?
    weak var mainCoordinator: MainFlowCoordinator?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        guard let moreInfos = stateController?.moreInfos else { return }
        let dataSource = MoreInfoTableViewDataSource(moreInfos: moreInfos)
        self.dataSource = dataSource
        tableView.dataSource = dataSource
        tableView.reloadData()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        mainCoordinator?.configure(viewController: segue.destination)
    }
}
