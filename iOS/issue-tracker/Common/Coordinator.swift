//
//  Coordinator.swift
//  issue-tracker
//
//  Created by 이다훈 on 2021/06/08.
//

import UIKit

protocol Coordinator: AnyObject {
    
    var navigationController: UINavigationController { get set }
    func present(view: PresentableView)
}

enum PresentableView {
    case IssueList
    case IssueEdit
    case ImagePicker
}
