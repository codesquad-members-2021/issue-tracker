//
//  CustomBarButtonItem.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/10.
//

import UIKit

class CustomBarButtonItem: UIButton {
    
    var customImageView: UIImageView = {
        let imageView = UIImageView()
         imageView.translatesAutoresizingMaskIntoConstraints = false
         imageView.contentMode = .scaleAspectFit
         imageView.tintColor = .systemBlue
         return imageView
    }()

    var customTitleLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.textColor = .systemBlue
        return label
    }()
    
    
    enum ImageLocation {
        case left
        case right
    }
    
    init(title: String, image: UIImage, located: ImageLocation) {
        super.init(frame: .zero)
    
        self.customTitleLabel.text = title
        self.customImageView.image = image.withAlignmentRectInsets(UIEdgeInsets(top: -10, left: 0, bottom: -10, right: 0))
        self.addSubview(customTitleLabel)
        self.addSubview(customImageView)
        
        if located == .left {
            configureWithImageAtLeftSide()
        } else {
            configureWithImageAtRightSide()
        }
        
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        assertionFailure("Initializing CustomBarButtonItem with coder should not be called")
    }
    
    private func configureWithImageAtLeftSide() {
        self.customTitleLabel.textAlignment = .left
        
        NSLayoutConstraint.activate([
            self.customImageView.topAnchor.constraint(equalTo: self.topAnchor),
            self.customImageView.bottomAnchor.constraint(equalTo: self.bottomAnchor),
            self.customImageView.leadingAnchor.constraint(equalTo: self.leadingAnchor),
            self.customImageView.widthAnchor.constraint(equalTo: self.heightAnchor),
            
            self.customTitleLabel.topAnchor.constraint(equalTo: self.topAnchor),
            self.customTitleLabel.bottomAnchor.constraint(equalTo: self.bottomAnchor),
            self.customTitleLabel.leadingAnchor.constraint(equalTo: customImageView.trailingAnchor)
        ])
        
    }
    
    private func configureWithImageAtRightSide() {
        self.customTitleLabel.textAlignment = .right
        
        NSLayoutConstraint.activate([
            self.customImageView.topAnchor.constraint(equalTo: self.topAnchor),
            self.customImageView.bottomAnchor.constraint(equalTo: self.bottomAnchor),
            self.customImageView.trailingAnchor.constraint(equalTo: self.trailingAnchor),
            self.customImageView.widthAnchor.constraint(equalTo: self.heightAnchor),
            
            self.customTitleLabel.topAnchor.constraint(equalTo: self.topAnchor),
            self.customTitleLabel.bottomAnchor.constraint(equalTo: self.bottomAnchor),
            self.customTitleLabel.trailingAnchor.constraint(equalTo: customImageView.leadingAnchor, constant: 5)
        ])
    }
    
}
