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
    
    private var currentIssue: Issue?
    private var saveOperation: ((Issue) -> Void)?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureViews()
    }
    
    private func configureViews() {
        view.backgroundColor = .white
        addNavigationItems()
    }

    private func addNavigationItems() {
        navigationItem.leftBarButtonItem = UIBarButtonItem(customView: cancelButton)
        navigationItem.rightBarButtonItem = UIBarButtonItem(customView: saveButton)
        navigationItem.titleView = markdownSegmentedControl
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
