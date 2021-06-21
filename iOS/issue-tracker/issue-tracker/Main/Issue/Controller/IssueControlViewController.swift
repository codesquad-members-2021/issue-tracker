//
//  IssueControlViewController.swift
//  issue-tracker
//
//  Created by Song on 2021/06/21.
//

import UIKit

final class IssueControlViewController: UIViewController {

    private lazy var cancelButton: ImageBarButton = {
        let button = ImageBarButton()
        button.configure(with: "chevron.backward", "취소")
        button.moveImageToLeft()
        button.addTarget(self, action: #selector(cancelButtonTouched), for: .touchUpInside)
        return button
    }()
    
    private lazy var saveButton: ImageBarButton = {
        let button = ImageBarButton()
        button.configure(with: "plus", "저장")
        button.addTarget(self, action: #selector(saveButtonTouched), for: .touchUpInside)
        return button
    }()
    
    private var currentIssue: Issue?
    private var saveOperation: ((Issue) -> Void)?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureViews()
    }
    
    private func configureViews() {
        view.backgroundColor = .white
        addNavigationButtons()
    }

    private func addNavigationButtons() {
        navigationItem.leftBarButtonItem = UIBarButtonItem(customView: cancelButton)
        navigationItem.rightBarButtonItem = UIBarButtonItem(customView: saveButton)
    }
    
    func setSaveOperation(_ operation: @escaping (Issue) -> Void) {
        self.saveOperation = operation
    }
    
    @objc private func cancelButtonTouched(_ sender: UIButton) {
        navigationController?.popViewController(animated: true)
    }
    
    @objc private func saveButtonTouched(_ sender: UIButton) {
        guard let saveOperation = saveOperation else { return }
        let tempIssue = Issue()
        saveOperation(tempIssue)
    }
    
}
