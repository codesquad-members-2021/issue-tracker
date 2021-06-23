//
//  LoginView.swift
//  issue-tracker
//
//  Created by zeke on 2021/06/08.
//

import UIKit
import SnapKit

class LoginView: UIView {

    let titleLabel: UILabel = {
        var label = UILabel()
        label.textAlignment = .center
        label.text = "Issue Tracker"
        label.font = UIFont.systemFont(ofSize: 48)
        return label
    }()

    let login: UIButton = {
        var button = UIButton()
        button.titleLabel?.font = UIFont.boldSystemFont(ofSize: 16)
        button.setTitle("로그인", for: .normal)
        button.setTitleColor(.systemBlue, for: .normal)
        return button
    }()

    let signUp: UIButton = {
        var button = UIButton()
        button.titleLabel?.font = UIFont.boldSystemFont(ofSize: 16)
        button.setTitle("회원가입", for: .normal)
        button.setTitleColor(.systemBlue, for: .normal)
        return button
    }()

//    let appleLoginButton = AppleLoginButton()
//    let githubLoginButton = GitHubLoginButton()
    let textField = IDPasswordTextField()

    override init(frame: CGRect) {
        super.init(frame: frame)
        backgroundColor = #colorLiteral(red: 0.9490135312, green: 0.9490135312, blue: 0.9694761634, alpha: 1)
        addSubViews()
        setAutolayout()
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        backgroundColor = #colorLiteral(red: 0.9490135312, green: 0.9490135312, blue: 0.9694761634, alpha: 1)
        addSubViews()
        setAutolayout()
    }

    func addSubViews() {
        addSubview(titleLabel)
//        addSubview(appleLoginButton)
//        addSubview(githubLoginButton)
        addSubview(textField)
        addSubview(login)
        addSubview(signUp)
    }

    func setAutolayout() {
        titleLabel.snp.makeConstraints { title in
            title.height.equalTo(72)
            title.top.equalToSuperview().offset(165)
            title.leading.trailing.equalTo(self).inset(40)
        }

        textField.snp.makeConstraints { textField in
            textField.top.equalTo(titleLabel.snp.bottom).offset(72)
            textField.leading.trailing.equalTo(self)
            textField.height.equalTo(89)
        }

        login.snp.makeConstraints { login in
            login.top.equalTo(textField.snp.bottom).offset(32)
            login.leading.equalTo(self).inset(96)
            login.width.equalTo(45)
            login.height.equalTo(21)
        }

        signUp.snp.makeConstraints { signUp in
            signUp.top.equalTo(textField.snp.bottom).offset(32)
            signUp.leading.equalTo(login.snp.trailing).offset(79)
            signUp.width.equalTo(59)
            signUp.height.equalTo(21)
        }

//        githubLoginButton.snp.makeConstraints { button in
//            button.top.equalTo(login.snp.bottom).offset(175)
//            button.leading.trailing.equalTo(self).inset(16)
//            button.height.equalTo(56)
//        }
//
//        appleLoginButton.snp.makeConstraints { button in
//            button.top.equalTo(githubLoginButton.snp.bottom).offset(14)
//            button.leading.trailing.equalTo(self).inset(16)
//            button.height.equalTo(56)
//        }
    }
}
