//
//  LabelViewController.swift
//  issue-tracker
//
//  Created by Song on 2021/06/09.
//

import UIKit

class LabelViewController: UIViewController {
    
    private lazy var addLabelButton: UIButton = {
        let button = UIButton()
        let plusImage = UIImage(systemName: "plus")
        button.setImage(plusImage, for: .normal)
        button.tintColor = Colors.mainGrape
        button.setTitle("추가", for: .normal)
        button.setTitleColor(Colors.mainGrape, for: .normal)
        button.semanticContentAttribute = .forceRightToLeft
        button.imageEdgeInsets = UIEdgeInsets(top: 0, left: 4, bottom: 0, right: 0)
        button.addTarget(self, action: #selector(addLabelTouched), for: .touchUpInside)
        return button
    }()
    
    private var loginInfo: LoginInfo?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor.white
        title = "레이블"
        addNavigationButton()
    }
    
    private func addNavigationButton() {
        navigationItem.rightBarButtonItem = UIBarButtonItem(customView: addLabelButton)
    }
    
    @objc private func addLabelTouched(_ sender: UIButton) {
        
    }
    
}

extension LabelViewController: LoginInfoContainer {
    func setup(loginInfo: LoginInfo) {
        self.loginInfo = loginInfo
    }
}
