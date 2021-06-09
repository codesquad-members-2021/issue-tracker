//
//  SecondViewController.swift
//  issueTracker
//
//  Created by 박정하 on 2021/06/09.
//

import UIKit

class IssueListViewController: UIViewController {
    
    let issueListTitle: String
    let issuefilterButton: UIButton
    let issueEditButton: UIButton
    
    override init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?) {
        issueListTitle = ""
        issuefilterButton = UIButton()
        issueEditButton = UIButton()
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        issueListTitle = ""
        issuefilterButton = UIButton()
        issueEditButton = UIButton()
        super.init(coder: coder)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.set(navigationBarTitle: "이슈")
        self.setupLeftNavigationItem(buttonTitle: "필터")
        self.setupRightNavigationItem(buttonTitle: "선택")
    }
    
    func set(navigationBarTitle: String) {
        self.navigationItem.title = navigationBarTitle
        self.navigationController?.navigationBar.prefersLargeTitles = true
    }
    
    func setupLeftNavigationItem(buttonTitle: String) {
        let uibutton = UIButton()
        uibutton.setTitleColor(UIColor(red: 0, green: 0.32, blue: 0.4, alpha: 1), for: .normal)
        uibutton.setTitle(buttonTitle, for: .normal)
        let leftbarbutton = UIBarButtonItem(customView: uibutton)
        self.navigationItem.leftBarButtonItem = leftbarbutton
    }
    
    func setupRightNavigationItem(buttonTitle: String) {
        let uibutton = UIButton()
        uibutton.setTitleColor(UIColor(red: 0, green: 0.32, blue: 0.4, alpha: 1), for: .normal)
        uibutton.setTitle(buttonTitle, for: .normal)
        uibutton.semanticContentAttribute = .forceRightToLeft
        let rightbarbutton = UIBarButtonItem(customView: uibutton)
        self.navigationItem.rightBarButtonItem = rightbarbutton
    }
}
