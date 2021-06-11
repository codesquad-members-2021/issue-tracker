//
//  IssueEditViewController.swift
//  issue-tracker
//
//  Created by 박혜원 on 2021/06/09.
//

import UIKit

class IssueEditViewController: UIViewController, ReuseIdentity {

    @IBOutlet weak var additionalInfoTable: UITableView!
    @IBOutlet weak var textContent: UITextView!
    
    weak var coordinator: Coordinator?
    private var tableDelegate = AdditionalTableDelegate()
    private var tableDataSource = AdditionalTableViewDataSource()
    
    private lazy var photoPicker = ImagePicker(presentationController: self, delegate: self)
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.additionalInfoTable.delegate = tableDelegate
        self.additionalInfoTable.dataSource = tableDataSource
        self.textContent.delegate = self
        
        registerNib()
        configureTable()
    }
    
    private func registerNib() {
        additionalInfoTable.register(UINib(nibName: AdditionalTableViewCell.nibName, bundle: Bundle.main),
                                     forCellReuseIdentifier: AdditionalTableViewCell.reuseIdentifier)
        
    }
    
    private func configureTable() {
        self.additionalInfoTable.translatesAutoresizingMaskIntoConstraints = false
        self.additionalInfoTable.tableFooterView = UIView()
    }

    @objc
    func insertPhoto() {
        self.photoPicker.present()
    }
    
}
extension IssueEditViewController: UITextViewDelegate {
    
    func textViewDidBeginEditing(_ textView: UITextView) {
        let menuItem = UIMenuItem(title: "Insert Photo", action: #selector(insertPhoto))
        UIMenuController.shared.menuItems = [menuItem]
    }
}

extension IssueEditViewController: ImagePickerDelegate {
    
    func didSelect(image: UIImage?) {
        
    }
}
