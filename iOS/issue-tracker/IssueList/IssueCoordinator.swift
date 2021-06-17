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
        let issueListVC = UIStoryboard(name: StoryBoardName.IssueList.description, bundle: nil)
            .instantiateViewController(withIdentifier: IssueListViewController.reuseIdentifier) as! IssueListViewController
        
        self.navigationController = UINavigationController(rootViewController: issueListVC)
        navigationController.tabBarItem = UITabBarItem(title: "이슈",
                                                       image: UIImage.init(systemName: "exclamationmark.circle"),
                                                       tag: 0)
        super.init()
        issueListVC.coordinator = self
    }
    
    func pushEditView() {
        let issueEditVC = UIStoryboard(name: StoryBoardName.IssueEdit.description, bundle: nil)
            .instantiateViewController(withIdentifier: IssueEditViewController.reuseIdentifier) as! IssueEditViewController
        issueEditVC.coordinator = self
        navigationController.pushViewController(issueEditVC, animated: true)
    }
    
    func pushImagePickerView() {
        let imagePickerDelegate = ImagePickerDelegate()
        let imagePicker = ImagePicker.init(presentationController: self.navigationController, delegate: imagePickerDelegate)
        self.navigationController.present(imagePicker.pickerController, animated: true, completion: nil)
    }
}
