//
//  PhotoPicker.swift
//  issue-tracker
//
//  Created by 박혜원 on 2021/06/10.
//

import UIKit

public protocol ImagePickerDelegatable: AnyObject {
    func didSelect(image: UIImage?)
}

class ImagePicker: NSObject {
    
    weak var coordinator: Coordinator!
    let pickerController: UIImagePickerController
    private weak var delegate: ImagePickerDelegatable?
    
    public init(presentationController: UIViewController, delegate: ImagePickerDelegatable) {
        self.pickerController = UIImagePickerController()
        
        super.init()
        self.delegate = delegate
        
        self.pickerController.delegate = self
        self.pickerController.allowsEditing = true
        self.pickerController.mediaTypes = ["public.image"]
    }
    
    private func pickerController(_ controller: UIImagePickerController, didSelect image: UIImage?) {
        guard let coordinator = self.coordinator as? IssueCoordinator else {
            return
        }
        coordinator.dismiss(view: self.pickerController)
        self.delegate?.didSelect(image: image)
    }
}

extension ImagePicker: UIImagePickerControllerDelegate {
    
    func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
        self.pickerController(picker, didSelect: nil)
    }
    
    func imagePickerController(_ picker: UIImagePickerController,
                               didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
        guard let image = info[.editedImage] as? UIImage else {
            return self.pickerController(picker, didSelect: nil)
        }
        self.pickerController(picker, didSelect: image)
    }
}

extension ImagePicker: UINavigationControllerDelegate {
    
}

class ImagePickerDelegate: ImagePickerDelegatable {
    func didSelect(image: UIImage?) {
        
    }
}
