//
//  IssueDetailViewController.swift
//  issue-tracker
//
//  Created by jinseo park on 6/23/21.
//

import Foundation
import UIKit

class IssueDetailViewController: UIViewController {
    
    private lazy var backButton: ImageBarButton = {
        let button = ImageBarButton()
        button.configure(with: "chevron.backward", "목록")
        button.addTarget(self, action: #selector(backToIssuesTouched), for: .touchUpInside)
        return button
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    @objc func backToIssuesTouched(_ sender: UIButton) {
        self.navigationController?.popViewController(animated: true)
    }
}
