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
        guard let issueListVC = UIStoryboard(name: StoryBoardName.IssueList.description, bundle: nil)
                .instantiateViewController(withIdentifier: IssueListViewController.reuseIdentifier) as? IssueListViewController else {
            return
        }
        
        self.navigationController = UINavigationController(rootViewController: issueListVC)
        navigationController.tabBarItem = UITabBarItem(title: "이슈",
                                                       image: UIImage.init(systemName: "exclamationmark.circle"),
                                                       tag: 0)
        issueListVC.coordinator = self
    }
    
    func pushEditView() {
        guard let issueEditVC = UIStoryboard(name: StoryBoardName.IssueEdit.description, bundle: nil)
                .instantiateViewController(withIdentifier: IssueEditViewController.reuseIdentifier) as? IssueEditViewController else {
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
