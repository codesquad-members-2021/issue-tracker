//
//  MileStoneControlViewController.swift
//  issue-tracker
//
//  Created by jinseo park on 6/20/21.
//

import Foundation
import UIKit

class MileStoneControlViewController: UIViewController {
    
    private lazy var topMenuView: TopMenuView = {
        let topMenuView = TopMenuView()
        topMenuView.configure(withTitle: sceneTitle, rightButton: saveButton, leftButton: cancelButton)
        topMenuView.translatesAutoresizingMaskIntoConstraints = false
        return topMenuView
    }()
    
    private lazy var saveButton: ImageBarButton = {
        let button = ImageBarButton()
        button.configure(with: "", "저장")
        button.translatesAutoresizingMaskIntoConstraints = false
        button.addTarget(self, action: #selector(saveButtonTouched), for: .touchUpInside)
        changeSaveButtonEnableStatus(baseOn: titleTextfield)
        return button
    }()
    
    private lazy var cancelButton: ImageBarButton = {
        let button = ImageBarButton()
        button.configure(with: "chevron.backward", "취소")
        button.moveImageToLeft()
        button.translatesAutoresizingMaskIntoConstraints = false
        button.addTarget(self, action: #selector(cancelButtonTouched), for: .touchUpInside)
        return button
    }()
    
    private lazy var mileStoneEditStackView: MultipleLineInputStackView = {
        let viewWidth = view.frame.width
        let stackViewFrame = CGRect(x: 0, y: 0, width: viewWidth, height: singleLineHeight * 3)
        let stackView = MultipleLineInputStackView(frame: stackViewFrame)
        
        let titleInputItem = InputLineItem(category: "제목", inputView: titleTextfield)
        let descriptionInputItem = InputLineItem(category: "설명", inputView: descriptionTextfield)
        let completeDateInputItem = InputLineItem(category: "완료일", inputView: completeDateTextField)
        stackView.configure(with: [titleInputItem, descriptionInputItem, completeDateInputItem])
        
        return stackView
    }()
    
    private lazy var titleTextfield: UITextField = {
        let textField = UITextField()
        textField.placeholder = "(필수 입력)"
        return textField
    }()
    
    private lazy var descriptionTextfield: UITextField = {
        let textField = UITextField()
        textField.placeholder = "(선택 사항)"
        return textField
    }()
    
    let validityType: String.ValidityType = .date
    
    private lazy var completeDateTextField: UITextField = {
        let textField = UITextField()
        textField.placeholder = "YYYY-MM-DD(선택사항)"
        textField.addTarget(self, action: #selector(handleTextChange), for: .editingChanged)
        return textField
    }()
    
    private lazy var singleLineHeight: CGFloat = {
        return view.frame.height * 0.05
    }()
    
    private lazy var spacing: CGFloat = {
        return singleLineHeight * 0.5
    }()
    
    private var currentMileStone: MileStone?
    private var sceneTitle: String?
    private var saveOperation: ((MileStone) -> Void)?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureViews()
        setTitleTextFieldSupporter()
    }
    
    @objc func handleTextChange() {
        guard let text = completeDateTextField.text else { return }
        switch validityType {
        case .date:
            if text.isValid(validityType) {
                mileStoneEditStackView.setLabelColor(correct: true)
            }else{                
                mileStoneEditStackView.setLabelColor(correct: false)
            }
        }
    }
    
    private func configureViews() {
        view.backgroundColor = Colors.background
        addTopMenu()
        addEditStackView()
    }
    
    private func addTopMenu() {
        view.addSubview(topMenuView)
        
        NSLayoutConstraint.activate([
            topMenuView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            topMenuView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
            topMenuView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: spacing),
            topMenuView.heightAnchor.constraint(equalToConstant: singleLineHeight)
        ])
    }
    
    private func addEditStackView() {
        view.addSubview(mileStoneEditStackView)
        
        NSLayoutConstraint.activate([
            mileStoneEditStackView.heightAnchor.constraint(equalToConstant: singleLineHeight * 3),
            mileStoneEditStackView.topAnchor.constraint(equalTo: topMenuView.safeAreaLayoutGuide.bottomAnchor, constant: 40),
            mileStoneEditStackView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            mileStoneEditStackView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor)
        ])
    }
    
    private func setTitleTextFieldSupporter() {
        titleTextfield.delegate = self
    }
    
    func configure(withTitle sceneTitle: String, currentMileStone: MileStone?) {
        self.sceneTitle = sceneTitle
        self.currentMileStone = currentMileStone
        setUpCurrentMileStoneInfo()
    }
    
    private func setUpCurrentMileStoneInfo() {
        guard let currentMileStone = currentMileStone else { return }
        titleTextfield.text = currentMileStone.title
        descriptionTextfield.text = currentMileStone.description
        completeDateTextField.text = currentMileStone.due_date
    }
    
    func setSaveOperation(_ operation: @escaping (MileStone) -> Void) {
        self.saveOperation = operation
    }
    
    @objc private func cancelButtonTouched(_ sender: UIBarButtonItem) {
        dismiss(animated: true, completion: nil)
    }
    
    @objc func saveButtonTouched(_ sender: UIBarButtonItem) {
        guard let mileStoneTitle = titleTextfield.text,
              let completeDtae = completeDateTextField.text,
              let saveOperation = saveOperation else { return }
        
        let mileStone = MileStone(id: currentMileStone?.id ?? -1, title: mileStoneTitle, description: descriptionTextfield.text ?? "", due_date: completeDtae)
        saveOperation(mileStone)
        dismiss(animated: true, completion: nil)
    }
}

extension MileStoneControlViewController: UITextFieldDelegate {
    func textFieldDidChangeSelection(_ textField: UITextField) {
        changeSaveButtonEnableStatus(baseOn: textField)        
    }
    
    private func changeSaveButtonEnableStatus(baseOn textField: UITextField) {
        DispatchQueue.main.async {
            self.saveButton.isEnabled = !textField.isEmpty()
        }
    }
    
}
