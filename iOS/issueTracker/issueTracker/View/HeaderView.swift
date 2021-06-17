//
//  HeaderView.swift
//  issueTracker
//
//  Created by 오킹 on 2021/06/09.
//

import UIKit

class HeaderView: UIView {
    private var backButton: UIButton!
    
    override init(frame: CGRect) {
        super.init(frame: frame)
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
    
    func setUpBackButton2(viewController: UIViewController) {
        guard let IFViewController = viewController as? IssueFilterViewController else {
            return
        }
        self.backButton.addTarget(IFViewController,
                                  action: #selector(IFViewController.closeFilterController),
                                  for: .touchDown)
    }
    
    func setUpTitle(text: String) {
        let uiLabel = UILabel(frame: .zero)
        uiLabel.text = text
        uiLabel.font = .boldSystemFont(ofSize: 20)
        uiLabel.sizeToFit()
        self.addSubview(uiLabel)
        uiLabel.translatesAutoresizingMaskIntoConstraints = false
        uiLabel.textAlignment = .center
        uiLabel.centerXAnchor.constraint(equalTo: self.centerXAnchor).isActive = true
        uiLabel.centerYAnchor.constraint(equalTo: self.centerYAnchor).isActive = true
    }
    
    func setUpBackButton(text: String) {
        let backButton = UIButton(type: .custom)
        backButton.setTitle(text, for: .normal)
        backButton.setTitleColor(.systemBlue, for: .normal)
        backButton.titleLabel?.font = .systemFont(ofSize: 20)

        if let image = UIImage(systemName: "chevron.backward") {
            backButton.setImage(image, for: .normal)
        }
        self.addSubview(backButton)
        backButton.translatesAutoresizingMaskIntoConstraints = false
        backButton.centerYAnchor.constraint(equalTo: self.centerYAnchor).isActive = true
        backButton.leadingAnchor.constraint(equalTo: self.leadingAnchor, constant: 15).isActive = true
        self.backButton = backButton
    }
    
    func setUpSaveButton(text: String) {
        let backButton = UIButton()
        backButton.setTitle(text, for: .normal)
        backButton.titleLabel?.font = .boldSystemFont(ofSize: 20)
        backButton.setTitleColor(.systemBlue, for: .normal)
        self.addSubview(backButton)
        backButton.translatesAutoresizingMaskIntoConstraints = false
        backButton.centerYAnchor.constraint(equalTo: self.centerYAnchor).isActive = true
        backButton.trailingAnchor.constraint(equalTo: self.trailingAnchor, constant: -15).isActive = true
    }
}
