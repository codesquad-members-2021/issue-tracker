//
//  AddButton.swift
//  issue-tracker
//
//  Created by Song on 2021/06/15.
//

import UIKit

final class ImageBarButton: UIButton {
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    private func configure() {
        tintColor = Colors.mainGrape
        setTitleColor(Colors.mainGrape, for: .normal)
        semanticContentAttribute = .forceRightToLeft
        imageEdgeInsets = UIEdgeInsets(top: 0, left: 4, bottom: 0, right: 0)
    }
    
    func configure(with systemImageName: String,_ buttonTitle: String) {
        setImage(of: systemImageName)
        setTitle(buttonTitle, for: .normal)
    }
    
    private func setImage(of systemName: String) {
        let image = UIImage(systemName: systemName)
        setImage(image, for: .normal)
    }
    
    func moveImageToLeft() {
        semanticContentAttribute = .forceLeftToRight
        imageEdgeInsets = UIEdgeInsets(top: 0, left: -4, bottom: 0, right: 0)
    }
}
