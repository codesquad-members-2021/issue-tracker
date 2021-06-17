//
//  MainTabBarController.swift
//  issue-tracker
//
//  Created by 이다훈 on 2021/06/08.
//

import UIKit

class MainTabBarController: UITabBarController {
    
    private var coordinators: [Coordinator]
    
    override init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?) {
        self.coordinators = []
        super.init(nibName: nibNameOrNil, bundle: nibBundleOrNil)
    }
    
    required init?(coder: NSCoder) {
        self.coordinators = []
        super.init(coder: coder)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    func appendCoordinators(_ coordinators : Coordinator...) {
        self.coordinators.append(contentsOf: coordinators)
        var viewControllers = [UIViewController]()
        
        self.coordinators.enumerated().makeIterator().forEach({
            (index, coordinator) in
            viewControllers.append(coordinator.navigationController)
        })
        self.viewControllers = viewControllers
    }
    
}
