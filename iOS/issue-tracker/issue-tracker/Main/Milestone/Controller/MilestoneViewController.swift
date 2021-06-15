//
//  MilestoneViewController.swift
//  issue-tracker
//
//  Created by Song on 2021/06/09.
//

import UIKit

class MilestoneViewController: UIViewController {
    
    private lazy var addMileStoneButton: ImageBarButton = {
        let button = ImageBarButton()
        button.configure(with: "plus", "추가")
        button.addTarget(self, action: #selector(addMileStoneTouched), for: .touchUpInside)
        return button
    }()
    
    @objc private func addMileStoneTouched(_ sender: UIButton) {
        print("마일스톤 추가해줘잉")
    }
    
    private var loginInfo: LoginInfo?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor.white
        title = "마일스톤"
        addNavigationButton()        
    }
    
    private func addNavigationButton() {
        navigationItem.rightBarButtonItem = UIBarButtonItem(customView: addMileStoneButton)
    }
}

extension MilestoneViewController: LoginInfoContainer {
    func setup(loginInfo: LoginInfo) {
        self.loginInfo = loginInfo
    }
}
