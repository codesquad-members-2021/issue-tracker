//
//  AddViewController.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/10.
//

import UIKit

class AddViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        navigationItem.title = "새로운 마일스톤"
        self.navigationItem.leftBarButtonItem = UIBarButtonItem(title: "뒤로",
                                                                style: .plain,
                                                                target: self,
                                                                action: nil)
        self.navigationItem.rightBarButtonItem = UIBarButtonItem(title: "저장",
                                                                 style: .plain,
                                                                 target: self,
                                                                 action: nil)
        
        view.addSubview(InputView(frame: view.bounds))
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
    }
}
