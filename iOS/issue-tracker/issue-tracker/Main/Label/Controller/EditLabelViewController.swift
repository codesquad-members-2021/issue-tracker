//
//  EditLabelViewController.swift
//  issue-tracker
//
//  Created by Song on 2021/06/18.
//

import UIKit

class EditLabelViewController: LabelControlViewController {

    private var labelToEdit: Label?
    
    func setLabelToEdit(label: Label) {
        self.labelToEdit = label
        
        titleTextfield.text = label.title
        descriptionTextfield.text = label.body
        backgroundLabel.text = label.hexColorCode
    }
    
    override func saveButtonTouched(_ sender: UIBarButtonItem) {
        super.saveButtonTouched(sender)
        guard let labelTitle = titleTextfield.text, let colorCode = backgroundLabel.text else { return }
        
        let editedLabel = NewLabelDTO(name: labelTitle,
                                      content: descriptionTextfield.text ?? "",
                                      colorCode: colorCode)
        putLabel(editedLabel)
    }
    
    private func putLabel(_ editedLabel: NewLabelDTO) {
        guard let labelId = labelToEdit?.id else { return }
        let editLabelEndpoint = EndPoint.label.path(with: labelId)
        
        networkManager?.put(endpoint: editLabelEndpoint, requestBody: editedLabel, completion: { [weak self] result in
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
