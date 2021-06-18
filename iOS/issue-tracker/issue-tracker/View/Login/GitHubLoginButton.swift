//
//  GitHubLoginButton.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/08.
//

import UIKit
import SnapKit

class GitHubLoginButton: UIView {

    var stackView: UIStackView = {
        var stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.alignment = .fill
        stackView.distribution = .fill
        stackView.spacing = 8
        return stackView
    }()

    var octocatImageView: UIImageView = {
        var imageView = UIImageView()
        imageView.contentMode = .scaleAspectFill
        imageView.image = UIImage(named: "github")
        return imageView
    }()

    var loginLabel: UILabel = {
        var label = UILabel()
        label.text = "GitHub 계정으로 로그인"
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
        stackView.addArrangedSubview(octocatImageView)
        stackView.addArrangedSubview(loginLabel)
    }

    func setAutolayout() {
        octocatImageView.snp.makeConstraints { image in
            image.width.height.equalTo(30)
        }

        stackView.snp.makeConstraints { stackView in
            stackView.centerX.centerY.equalToSuperview()
        }
    }
}
