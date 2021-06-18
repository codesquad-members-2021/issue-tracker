//
//  TopMenuView.swift
//  issue-tracker
//
//  Created by Song on 2021/06/18.
//

import UIKit

final class TopMenuView: UIView {

    private lazy var titleLabel: UILabel = {
        let titleLabel = UILabel()
        titleLabel.text = menuTitle
        titleLabel.font = .systemFont(ofSize: 18, weight: .bold)
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        return titleLabel
    }()
    
    private var rightButton: UIButton?
    private var leftButton: UIButton?
    private var menuTitle: String?
    private let spacing: CGFloat = 16
    
    func configure(withTitle title: String?, rightButton: UIButton?, leftButton: UIButton?) {
        self.menuTitle = title
        self.rightButton = rightButton
        self.leftButton = leftButton
        
        addTitleLabel()
        addRightButton()
        addLeftButton()
    }
    
    private func addTitleLabel() {
        addSubview(titleLabel)
        
        NSLayoutConstraint.activate([
            titleLabel.centerXAnchor.constraint(equalTo: centerXAnchor),
            titleLabel.centerYAnchor.constraint(equalTo: centerYAnchor)
        ])
    }
    
    private func addRightButton() {
        guard let rightButton = rightButton else { return }
        
        addSubview(rightButton)
        
        NSLayoutConstraint.activate([
            rightButton.centerYAnchor.constraint(equalTo: safeAreaLayoutGuide.centerYAnchor),
            rightButton.widthAnchor.constraint(greaterThanOrEqualToConstant: spacing * 2),
            rightButton.heightAnchor.constraint(equalToConstant: spacing * 1.5),
            rightButton.trailingAnchor.constraint(equalTo: safeAreaLayoutGuide.trailingAnchor, constant: -spacing)
        ])
    }
    
    private func addLeftButton() {
        guard let leftButton = leftButton else { return }
        
        addSubview(leftButton)
        
        NSLayoutConstraint.activate([
            leftButton.centerYAnchor.constraint(equalTo: safeAreaLayoutGuide.centerYAnchor),
            leftButton.widthAnchor.constraint(greaterThanOrEqualToConstant: spacing * 2),
            leftButton.heightAnchor.constraint(equalToConstant: spacing * 1.5),
            leftButton.leadingAnchor.constraint(equalTo: safeAreaLayoutGuide.leadingAnchor, constant: spacing)
        ])
    }
}

