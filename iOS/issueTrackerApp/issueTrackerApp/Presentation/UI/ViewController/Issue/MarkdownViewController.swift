//
//  MarkdownViewController.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/15.
//

import UIKit
import MarkdownKit

class MarkdownViewController: UIViewController, Stateful, MainCoordinated {
    
    @IBOutlet weak var markdownLabel: UILabel!
    
    var stateController: StateController?
    weak var mainCoordinator: MainFlowCoordinator?
    private let markdownParser = MarkdownParser()
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        configureMarkdownView()
    }
    
    private func configureMarkdownView() {
        markdownLabel.attributedText = markdownParser.parse(stateController?.comment ?? "")
    }
}
