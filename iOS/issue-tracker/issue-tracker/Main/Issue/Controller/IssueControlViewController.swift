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
    
    private enum Segment: Int, CaseIterable {
        case markdown = 0
        case preview = 1
        
        var title: String {
            switch self {
            case .markdown:
                return "마크다운"
            case .preview:
                return "미리보기"
            }
        }
    }
    
    private lazy var markdownSegmentedControl: UISegmentedControl = {
        let segmentedControl = UISegmentedControl()
        let segmentWidth = view.frame.width * 0.25
        
        Segment.allCases.forEach { segment in
            let segmentIndex = segment.rawValue
            segmentedControl.insertSegment(withTitle: segment.title, at: segmentIndex, animated: true)
            segmentedControl.setWidth(segmentWidth, forSegmentAt: segmentIndex)
        }

        let heavyFontStyle = UIFont.systemFont(ofSize: 14, weight: .heavy)
        let fontKey = NSAttributedString.Key.font
        segmentedControl.setTitleTextAttributes([fontKey: heavyFontStyle], for: .normal)
        segmentedControl.setTitleTextAttributes([fontKey: heavyFontStyle], for: .selected)
        
        segmentedControl.addTarget(self, action: #selector(markdownSegmentChanged), for: .valueChanged)
        segmentedControl.selectedSegmentIndex = Segment.markdown.rawValue
        return segmentedControl
    }()
    
    private lazy var titleInputView: UIView = {
        let container = UIView(frame: .zero)
        container.translatesAutoresizingMaskIntoConstraints = false
        
        let titleLabel = UILabel()
        titleLabel.text = "제목"
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        
        container.addSubview(titleLabel)
    
        NSLayoutConstraint.activate([
            titleLabel.leadingAnchor.constraint(equalTo: container.safeAreaLayoutGuide.leadingAnchor, constant: spacing),
            titleLabel.centerYAnchor.constraint(equalTo: container.safeAreaLayoutGuide.centerYAnchor)
        ])
        
        container.addSubview(titleTextField)

        NSLayoutConstraint.activate([
            titleTextField.leadingAnchor.constraint(equalTo: container.safeAreaLayoutGuide.leadingAnchor, constant: spacing * 5),
            titleTextField.trailingAnchor.constraint(equalTo: container.safeAreaLayoutGuide.trailingAnchor, constant: -spacing),
            titleTextField.centerYAnchor.constraint(equalTo: container.safeAreaLayoutGuide.centerYAnchor)
        ])
        
        let line = CALayer()
        let borderWidth: CGFloat = 1
        let size = CGSize(width: view.frame.width - spacing, height: borderWidth)
        let origin = CGPoint(x: spacing, y: lineHeight - borderWidth)
        line.frame = CGRect(origin: origin, size: size)
        line.backgroundColor = Colors.border.cgColor
        container.layer.addSublayer(line)
        return container
    }()
    
    private lazy var titleTextField: UITextField = {
        let textField = UITextField()
        textField.placeholder = "(필수 입력)"
        textField.translatesAutoresizingMaskIntoConstraints = false
        return textField
    }()
    
    private lazy var lineHeight: CGFloat = {
        return view.frame.height * 0.05
    }()
    
    private lazy var spacing: CGFloat = {
        return lineHeight * 0.5
    }()
    
    private var currentIssue: Issue?
    private var saveOperation: ((Issue) -> Void)?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureViews()
    }
    
    private func configureViews() {
        navigationController?.navigationBar.prefersLargeTitles = false
        view.backgroundColor = .white
        addNavigationItems()
        addTitleInputView()
    }

    private func addNavigationItems() {
        navigationItem.leftBarButtonItem = UIBarButtonItem(customView: cancelButton)
        navigationItem.rightBarButtonItem = UIBarButtonItem(customView: saveButton)
        navigationItem.titleView = markdownSegmentedControl
    }
    
    private func addTitleInputView() {
        view.addSubview(titleInputView)
        
        NSLayoutConstraint.activate([
            titleInputView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: spacing * 0.3),
            titleInputView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            titleInputView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
            titleInputView.heightAnchor.constraint(equalToConstant: lineHeight)
        ])
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
    
    @objc private func markdownSegmentChanged(_ sender: UISegmentedControl) {
        let currentIndex = sender.selectedSegmentIndex
    
        switch currentIndex {
        case Segment.markdown.rawValue:
            print("마크다운 내놔")
        case Segment.preview.rawValue:
            print("프리뷰 내놔")
        default:
            assert(false)
        }
    }
}
