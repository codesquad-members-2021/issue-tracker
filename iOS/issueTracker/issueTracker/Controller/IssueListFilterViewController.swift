//
//  TestVC.swift
//  issueTracker
//
//  Created by 오킹 on 2021/06/09.
//

import Foundation
import UIKit

class IssueListFilterViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()

        let header = HeaderView(frame: CGRect(x: 0, y: 0, width: self.view.frame.width, height: self.view.frame.height/12))
        header.setUpTitle(text: "필터")
        header.setUpBackButton(text: "취소")
        header.setUpSaveButton(text: "저장")
        self.view.addSubview(header)
    }
    
    override func viewDidAppear(_ animated: Bool) {
        self.navigationController?.isNavigationBarHidden = false
    }
}
