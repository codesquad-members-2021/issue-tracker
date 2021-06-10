//
//  AppleLoginButton.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/08.
//

import UIKit
import SnapKit

class AppleLoginButton: UIView {
    
    var stackView: UIStackView = {
        var stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.alignment = .fill
        stackView.distribution = .fill
        stackView.spacing = 2
        return stackView
    }()
    
    var appleImageView: UIImageView = {
        var imageView = UIImageView()
        imageView.contentMode = .scaleAspectFill
        imageView.image = UIImage(named: "apple")
        return imageView
    }()
    
    var loginLabel: UILabel = {
        var label = UILabel()
        label.text = "Apple 계정으로 로그인"
        label.font = UIFont.boldSystemFont(ofSize: 17)
        label.textColor = .white
        return label
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setGitHubLoginButton()
        setStackView()
        self.addSubview(stackView)
        setAutolayout()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setGitHubLoginButton()
        setStackView()
        self.addSubview(stackView)
        setAutolayout()
    }
    
    func setGitHubLoginButton() {
        self.backgroundColor = .black
        self.layer.masksToBounds = true
        self.layer.cornerRadius = 10
    }
    
    func setStackView() {
        stackView.addArrangedSubview(appleImageView)
        stackView.addArrangedSubview(loginLabel)
    }
    
    func setAutolayout() {
        appleImageView.snp.makeConstraints { image in
            image.width.height.equalTo(50)
        }
        
        stackView.snp.makeConstraints { stackView in
            stackView.centerX.centerY.equalToSuperview()
        }
    }
}
