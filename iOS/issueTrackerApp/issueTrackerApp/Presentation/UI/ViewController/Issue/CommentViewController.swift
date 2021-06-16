//
//  CommentViewController.swift
//  issueTrackerApp
//
//  Created by zombietux on 2021/06/15.
//

import UIKit

class CommentViewController: UIViewController, AddIssueViewModelType, MainCoordinated {
    
    @IBOutlet weak var commentTextView: UITextView!
    
    private var addIssueViewModel: AddIssueViewModel!
    weak var mainCoordinator: MainFlowCoordinator?
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        commentTextView.delegate = self
    }
    
    func setAddIssueViewModel(_ addIssueViewModel: AddIssueViewModel) {
        self.addIssueViewModel = addIssueViewModel
    }
}

extension CommentViewController: UITextViewDelegate {
    func textViewDidEndEditing(_ textView: UITextView) {
        addIssueViewModel?.updateComment(textView.text ?? "")
    }
    
    func textViewDidBeginEditing(_ textView: UITextView) {
        let menuItem = UIMenuItem(title: "Insert Photo", action: #selector(textViewDidTapped))
        UIMenuController.shared.menuItems = [menuItem]
    }
    
    @objc func textViewDidTapped() {
        
    }
}
