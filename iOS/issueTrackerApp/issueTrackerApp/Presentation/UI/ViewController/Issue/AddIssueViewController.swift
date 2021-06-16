//
//  AddIssueViewController.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/11.
//

import UIKit

class AddIssueViewController: UIViewController, Stateful, MainCoordinated {
    @IBOutlet private weak var cancelButton: UIButton!
    @IBOutlet private weak var saveButton: UIButton!
    @IBOutlet private weak var markdownSegmentedControl: UISegmentedControl!
    @IBOutlet private weak var titleTextField: UITextField!
    @IBOutlet private weak var moreInformationView: UIView!
    @IBOutlet private weak var commentView: UIView!
    
    var stateController: StateController?
    weak var mainCoordinator: MainFlowCoordinator?
    private lazy var commentInputViewControler: CommentViewController = {
        let storyboard = UIStoryboard(name: "Issue", bundle: Bundle.main)
        var viewController = storyboard.instantiateViewController(identifier: "CommentViewController") as! CommentViewController
        viewController.stateController = stateController
        self.add(asChildViewController: viewController)
        return viewController
    }()
    
    private lazy var markdownInputViewControler: MarkdownViewController = {
        let storyboard = UIStoryboard(name: "Issue", bundle: Bundle.main)
        var viewController = storyboard.instantiateViewController(identifier: "MarkdownViewController") as! MarkdownViewController
        viewController.stateController = stateController
        self.add(asChildViewController: viewController)
        return viewController
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.addSubview(moreInformationView)
        setupView()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        mainCoordinator?.configure(viewController: segue.destination)
    }
}

//MARK:- Segmented Control
extension AddIssueViewController {
    func setupView() {
        configureSegmentedControl()
        updateView()
    }
    
    private func configureSegmentedControl() {
        markdownSegmentedControl.removeAllSegments()
        markdownSegmentedControl.insertSegment(withTitle: "마크다운", at: 0, animated: true)
        markdownSegmentedControl.insertSegment(withTitle: "미리보기", at: 1, animated: true)
        markdownSegmentedControl.addTarget(self, action: #selector(selectionDidChange(_:)), for: .valueChanged)

        markdownSegmentedControl.selectedSegmentIndex = 0
    }
    
    @objc func selectionDidChange(_ sender: UISegmentedControl) {
        updateView()
    }
    
    private func updateView() {
        if markdownSegmentedControl.selectedSegmentIndex == 0 {
            remove(asChildViewController: markdownInputViewControler)
            add(asChildViewController: commentInputViewControler)
        } else {
            remove(asChildViewController: commentInputViewControler)
            add(asChildViewController: markdownInputViewControler)
        }
    }
    
    private func add(asChildViewController viewController: UIViewController) {
        addChild(viewController)
        commentView.addSubview(viewController.view)
        viewController.view.frame = view.bounds
        viewController.view.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        viewController.didMove(toParent: self)
    }
    
    private func remove(asChildViewController viewController: UIViewController) {
        viewController.willMove(toParent: nil)
        viewController.view.removeFromSuperview()
        viewController.removeFromParent()
    }
}
