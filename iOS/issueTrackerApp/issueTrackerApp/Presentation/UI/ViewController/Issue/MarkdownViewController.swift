//
//  MarkdownViewController.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/15.
//

import UIKit
import MarkdownKit

class MarkdownViewController: UIViewController, AddIssueViewModelType, MainCoordinated {

    @IBOutlet weak var markdownLabel: UILabel!
    
    private var addIssueViewModel: AddIssueViewModel!
    weak var mainCoordinator: MainFlowCoordinator?
    private let markdownParser = MarkdownParser()
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        configureMarkdownView()
    }
    
    func setAddIssueViewModel(_ addIssueViewModel: AddIssueViewModel) {
        self.addIssueViewModel = addIssueViewModel
    }
    
    private func configureMarkdownView() {
        markdownLabel.attributedText = markdownParser.parse(addIssueViewModel?.comment ?? "")
    }
}
