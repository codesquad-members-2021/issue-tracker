//
//  AddLabelViewController.swift
//  issue-tracker
//
//  Created by Song on 2021/06/16.
//

import UIKit

final class AddLabelViewController: LabelControlViewController {
    override func saveButtonTouched(_ sender: UIBarButtonItem) {
        super.saveButtonTouched(sender)
        guard let labelTitle = titleTextfield.text, let colorCode = backgroundLabel.text else { return }
        
        let newLabel = NewLabelDTO(name: labelTitle,
                                   content: descriptionTextfield.text ?? "",
                                   colorCode: colorCode)
        postNewLabel(newLabel)
    }
    
    private func postNewLabel(_ newLabel: NewLabelDTO) {
        let newLabelEndpoint = EndPoint.label.path()
        networkManager?.post(endpoint: newLabelEndpoint, requestBody: newLabel, completion: { [weak self] result in
            switch result {
            case .success(_):
                self?.dismiss(animated: true, completion: {
                    guard let dismissOperation = self?.dismissOperation else { return }
                    dismissOperation()
                })
            case .failure(let error):
                self?.presentAlert(with: error.description)
            }
        })
    }
}
