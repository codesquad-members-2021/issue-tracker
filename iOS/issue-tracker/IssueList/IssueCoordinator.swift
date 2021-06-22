//
//  IssueCoordinator.swift
//  issue-tracker
//
//  Created by 이다훈 on 2021/06/08.
//

import UIKit

class IssueCoordinator: NSObject, Coordinator {
    
    var navigationController = UINavigationController()
    
    override init() {
        super.init()
        createIssueListVC()
    }
    
    private func createIssueListVC() {
        guard let issueListVC = IssueListViewController.instantiate(name: StoryBoardName.IssueList.description) else {
            return
        }
        
        self.navigationController = UINavigationController(rootViewController: issueListVC)
        let issueBarItem = UITabBarItem(title: "이슈",
                                       image: UIImage.init(systemName: "exclamationmark.circle"),
                                       tag: 0)
        navigationController.tabBarItem = issueBarItem
        issueListVC.coordinator = self
    }
    
    func pushEditView() {
        guard let issueEditVC = IssueEditViewController.instantiate(name: StoryBoardName.IssueEdit.description) else {
            return
        }
        issueEditVC.coordinator = self
        navigationController.pushViewController(issueEditVC, animated: true)
    }
    
    func pushImagePickerView() {
        let imagePickerDelegate = ImagePickerDelegate()
        let imagePicker = ImagePicker.init(presentationController: self.navigationController, delegate: imagePickerDelegate)
        imagePicker.coordinator = self
        self.navigationController.present(imagePicker.pickerController, animated: true, completion: nil)
    }
    
    func dismiss(view: UIViewController) {
        view.dismiss(animated: true, completion: nil)
    }
}
