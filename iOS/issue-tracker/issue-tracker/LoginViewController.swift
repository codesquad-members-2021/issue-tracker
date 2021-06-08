//
//  ViewController.swift
//  issue-tracker
//
//  Created by Song on 2021/06/07.
//

import UIKit

class ViewController: UIViewController {
    
    private lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.font = .italicSystemFont(ofSize: view.frame.width * 0.1)
        label.text = "L&J Issue Tracker"
        label.textColor = Colors.mainGrape
        return label
    }()
        
    private lazy var loginIDTextField: UITextField = {
        let textFields = UITextField()
        textFields.translatesAutoresizingMaskIntoConstraints = false
        textFields.frame = CGRect(x: 0, y: 0, width: view.frame.width * 0.65, height: view.frame.height / 18)
        return textFields
    }()
    
    private lazy var loginPwdTextField: UITextField = {
        let textFields = UITextField()
        textFields.translatesAutoresizingMaskIntoConstraints = false
        textFields.frame = CGRect(x: 0, y: 0, width: view.frame.width * 0.65, height: view.frame.height / 18)
        return textFields
    }()
    
    private lazy var loginStackView: UIStackView = {
        let superStackView = UIStackView()
        superStackView.axis = .vertical
        superStackView.distribution = .fillEqually
        let titles = ["아이디", "비밀번호"]
        let loginTextFields = [loginIDTextField,
                               loginPwdTextField]
        
        titles.enumerated().forEach { index, _ in
            
            let subStackView = UIStackView()
            subStackView.axis = .horizontal
            subStackView.spacing = 8
            subStackView.distribution = .fillProportionally
            subStackView.layoutMargins = UIEdgeInsets(top: 0, left: 16, bottom: 0, right: 16)
            subStackView.isLayoutMarginsRelativeArrangement = true
            
            let label = UILabel()
            label.text = titles[index]
            label.font = .systemFont(ofSize: 17)
            label.textColor = Colors.mainGrape
            label.translatesAutoresizingMaskIntoConstraints = false
            NSLayoutConstraint.activate([
                label.widthAnchor.constraint(equalToConstant: view.frame.width * 0.2),
            ])
                        
            subStackView.addArrangedSubview(label)
            subStackView.addArrangedSubview(loginTextFields[index])
            superStackView.addArrangedSubview(subStackView)
        }
        superStackView.translatesAutoresizingMaskIntoConstraints = false
        return superStackView
    }()
    
    private lazy var loginButton: UIButton = {
        let button = UIButton(frame: CGRect(x: 0, y: 0, width: view.frame.width * 0.12, height: view.frame.height * 0.025))
        button.translatesAutoresizingMaskIntoConstraints = false
        button.setTitle("로그인", for: .normal)
        button.setTitleColor(Colors.mainGrape, for: .normal)
        
        return button
    }()
    
    private lazy var signUpButton: UIButton = {
        let button = UIButton(frame: CGRect(x: 0, y: 0, width: view.frame.width * 0.12, height: view.frame.height * 0.025))
        button.translatesAutoresizingMaskIntoConstraints = false
        button.setTitle("회원가입", for: .normal)
        button.setTitleColor(Colors.mainGrape, for: .normal)
        
        return button
    }()
    
    private lazy var githubLoginButton: UIButton = {
        let button = UIButton()
        button.translatesAutoresizingMaskIntoConstraints = false
        let image = UIImage(named: "icon_github")?.resizedImage(Size: CGSize(width: 24, height: 24))
        button.setImage(image, for: .normal)
        button.setTitle("GitHub 계정으로 로그인", for: .normal)
        button.setTitleColor(UIColor.white, for: .normal)
        button.backgroundColor = Colors.mainGrape
        button.titleEdgeInsets = UIEdgeInsets(top: 0, left: 20, bottom: 0, right: 0)
        button.layer.cornerRadius = 20
        
        return button
    }()
    
    private lazy var appleLoginButton: UIButton = {
        let button = UIButton()
        button.translatesAutoresizingMaskIntoConstraints = false
        let image = UIImage(named: "icon_apple")?.resizedImage(Size: CGSize(width: 24, height: 24))
        button.setImage(image, for: .normal)
        button.setTitle("Apple 계정으로 로그인", for: .normal)
        button.setTitleColor(UIColor.white, for: .normal)
        button.backgroundColor = Colors.mainGrape
        button.titleEdgeInsets = UIEdgeInsets(top: 0, left: 20, bottom: 0, right: 0)
        button.layer.cornerRadius = 20
        
        return button
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = Colors.backGround
        addTitleLabel()
        addLoginStackView()
        addLoginButtons()
        addSocialLoginButton()
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        addLayer()
    }
        
    func addTitleLabel() {
        view.addSubview(titleLabel)
        NSLayoutConstraint.activate([
            titleLabel.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            titleLabel.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: view.frame.height / 5)
        ])
    }
    
    func addLoginStackView() {
        view.addSubview(loginStackView)
        loginStackView.backgroundColor = UIColor.white
        loginStackView.layer.borderColor = Colors.border.cgColor
        loginStackView.layer.borderWidth = 1.0
                
        NSLayoutConstraint.activate([
            loginStackView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            loginStackView.topAnchor.constraint(equalTo: titleLabel.bottomAnchor, constant: view.frame.height * 0.088),
            loginStackView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            loginStackView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
            loginStackView.heightAnchor.constraint(equalToConstant: view.frame.height / 8)
        ])
    }
    
    func addLayer() {
        let layer = CALayer()
        layer.frame = CGRect(x: 16, y: loginStackView.frame.height/2 - 1, width: loginStackView.frame.width - 16, height: 1)
        layer.backgroundColor = Colors.border.cgColor
        loginStackView.layer.addSublayer(layer)
    }
    
    func addLoginButtons() {
        view.addSubview(loginButton)
        view.addSubview(signUpButton)
        
        loginButton.addTarget(self, action: #selector(loginBtnTouchedDown), for: .touchUpInside)
        
        NSLayoutConstraint.activate([
            loginButton.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: view.frame.width / 4),
            loginButton.topAnchor.constraint(equalTo: loginStackView.bottomAnchor, constant: 32),
            signUpButton.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: (view.frame.width / 4) * -1),
            signUpButton.topAnchor.constraint(equalTo: loginStackView.bottomAnchor, constant: 32)
        ])
    }
    
    func addSocialLoginButton() {
        view.addSubview(appleLoginButton)
        view.addSubview(githubLoginButton)
        
        NSLayoutConstraint.activate([
            appleLoginButton.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
            appleLoginButton.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -16),
            appleLoginButton.bottomAnchor.constraint(equalTo: view.bottomAnchor, constant: -1 * (view.frame.height * 0.07)),
            appleLoginButton.heightAnchor.constraint(equalToConstant: view.frame.height * 0.068),
            
            githubLoginButton.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
            githubLoginButton.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -16),
            githubLoginButton.bottomAnchor.constraint(equalTo: appleLoginButton.topAnchor, constant: -14),
            githubLoginButton.heightAnchor.constraint(equalToConstant: view.frame.height * 0.068)
        ])
    }
    
    @objc func loginBtnTouchedDown(sender: UIButton!) {
        print("하이~, H I~")
    }
    
}

