//
//  LoginViewController.swift
//  issue-tracker
//
//  Created by Song on 2021/06/07.
//

import UIKit

class LoginViewController: UIViewController {
    
    private lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = .italicSystemFont(ofSize: view.frame.width * 0.1)
        label.text = "L&J Issue Tracker"
        label.textColor = Colors.mainGrape
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private lazy var loginIDTextField = UITextField()
    private lazy var loginPwdTextField = UITextField()
    
    private lazy var loginStackView: UIStackView = {
        let superStackView = UIStackView()
        superStackView.axis = .vertical
        superStackView.distribution = .fillEqually
        superStackView.translatesAutoresizingMaskIntoConstraints = false
        
        let titles = ["아이디", "비밀번호"]
        let loginTextFields = [loginIDTextField, loginPwdTextField]
        
        titles.enumerated().forEach { index, _ in
            let subStackView = UIStackView()
            subStackView.axis = .horizontal
            subStackView.spacing = spacing * 0.5
            subStackView.distribution = .fillProportionally
            subStackView.layoutMargins = UIEdgeInsets(top: 0, left: spacing, bottom: 0, right: spacing)
            subStackView.isLayoutMarginsRelativeArrangement = true
            
            let label = UILabel()
            label.text = titles[index]
            label.font = .systemFont(ofSize: 17)
            label.textColor = Colors.mainGrape
            label.translatesAutoresizingMaskIntoConstraints = false
            NSLayoutConstraint.activate([
                label.widthAnchor.constraint(equalToConstant: view.frame.width * 0.2),
            ])
            
            let textField = loginTextFields[index]
            let textFieldSize = CGSize(width: view.frame.width * 0.65, height: view.frame.height / 18)
            textField.frame = CGRect(origin: CGPoint.zero, size: textFieldSize)
            textField.translatesAutoresizingMaskIntoConstraints = false
            
            subStackView.addArrangedSubview(label)
            subStackView.addArrangedSubview(textField)
            superStackView.addArrangedSubview(subStackView)
        }
        return superStackView
    }()
    
    private lazy var loginButton: UIButton = {
        let button = UIButton()
        button.setTitle("로그인", for: .normal)
        button.setTitleColor(Colors.mainGrape, for: .normal)
        button.translatesAutoresizingMaskIntoConstraints = false
        return button
    }()
    
    private lazy var signUpButton: UIButton = {
        let button = UIButton()
        button.setTitle("회원가입", for: .normal)
        button.setTitleColor(Colors.mainGrape, for: .normal)
        button.translatesAutoresizingMaskIntoConstraints = false
        return button
    }()
    
    private lazy var githubLoginButton: UIButton = {
        let image = UIImage(named: "icon_github")
        let title = "GitHub 계정으로 로그인"
        let button = socialLoginButton(with: image, title)
        button.addTarget(self, action: #selector(loginWithGithubTouched), for: .touchUpInside)
        return button
        
    }()
    
    private lazy var appleLoginButton: UIButton = {
        let image = UIImage(named: "icon_apple")
        let title = "Apple 계정으로 로그인"
        let appleLoginButton = socialLoginButton(with: image, title)
        appleLoginButton.addTarget(self, action: #selector(loginWithAppleTouched), for: .touchUpInside)
        return appleLoginButton
    }()
    
    private let spacing: CGFloat = 16
    private let borderWidth: CGFloat = 1

    private var socialLoginManager: SocialLoginManagable?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = Colors.background
        addTitleLabel()
        addLoginStackView()
        addLoginButtons()
        addSocialLoginButtons()
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        addLoginStackViewDivisionLine()        
    }
    
    private func socialLoginButton(with image: UIImage?, _ title: String) -> UIButton {
        let button = UIButton()
        let resizedImage = image?.resizedImage(size: CGSize(width: 24, height: 24))
        button.setImage(resizedImage, for: .normal)
        button.setTitle(title, for: .normal)
        button.setTitleColor(UIColor.white, for: .normal)
        button.backgroundColor = Colors.mainGrape
        button.titleEdgeInsets = UIEdgeInsets(top: 0, left: 20, bottom: 0, right: 0)
        button.layer.cornerRadius = 20
        button.translatesAutoresizingMaskIntoConstraints = false
        return button
    }
    
    private func addTitleLabel() {
        view.addSubview(titleLabel)
        NSLayoutConstraint.activate([
            titleLabel.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            titleLabel.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: view.frame.height / 5)
        ])
    }
    
    private func addLoginStackView() {
        view.addSubview(loginStackView)
        loginStackView.backgroundColor = UIColor.white
        loginStackView.layer.borderColor = Colors.border.cgColor
        loginStackView.layer.borderWidth = borderWidth
        
        NSLayoutConstraint.activate([
            loginStackView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            loginStackView.topAnchor.constraint(equalTo: titleLabel.bottomAnchor, constant: view.frame.height * 0.088),
            loginStackView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor),
            loginStackView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor),
            loginStackView.heightAnchor.constraint(equalToConstant: view.frame.height / 8)
        ])
    }
    
    private func addLoginStackViewDivisionLine() {
        let line = CALayer()
        let origin = CGPoint(x: spacing, y: loginStackView.frame.height/2 - borderWidth)
        let size = CGSize(width: loginStackView.frame.width - spacing, height: borderWidth)
        line.frame = CGRect(origin: origin, size: size)
        line.backgroundColor = Colors.border.cgColor
        loginStackView.layer.addSublayer(line)
    }
    
    private func addLoginButtons() {
        view.addSubview(loginButton)
        view.addSubview(signUpButton)
        let buttonSpacing = view.frame.width / 4
        
        NSLayoutConstraint.activate([
            loginButton.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: buttonSpacing),
            loginButton.topAnchor.constraint(equalTo: loginStackView.bottomAnchor, constant: spacing * 2),
            signUpButton.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -buttonSpacing),
            signUpButton.topAnchor.constraint(equalTo: loginStackView.bottomAnchor, constant: spacing * 2)
        ])
    }
    
    private func addSocialLoginButtons() {
        view.addSubview(appleLoginButton)
        view.addSubview(githubLoginButton)
        let buttonHeight = view.frame.height * 0.068
        
        NSLayoutConstraint.activate([
            appleLoginButton.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: spacing),
            appleLoginButton.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -spacing),
            appleLoginButton.bottomAnchor.constraint(equalTo: view.bottomAnchor, constant: -1 * (view.frame.height * 0.07)),
            appleLoginButton.heightAnchor.constraint(equalToConstant: buttonHeight),
            
            githubLoginButton.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: spacing),
            githubLoginButton.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -spacing),
            githubLoginButton.bottomAnchor.constraint(equalTo: appleLoginButton.topAnchor, constant: -spacing * 0.8),
            githubLoginButton.heightAnchor.constraint(equalToConstant: buttonHeight)
        ])
    }
    
    private func presentIssueViewController(with loginInfo: LoginInfo) {
        let issueTrackerTabBarControllerCreator = IssueTrackerTabBarCreator(loginInfo: loginInfo)
        let issueTrackerTabBarController = issueTrackerTabBarControllerCreator.create()
        issueTrackerTabBarController.modalPresentationStyle = .fullScreen
        
        DispatchQueue.main.async {
            self.present(issueTrackerTabBarController, animated: true, completion: nil)
        }
    }
    
    private func presentAlert(with errorMessage: String) {
        let alert = AlertFactory.create(body: errorMessage)
        
        DispatchQueue.main.async {
            self.present(alert, animated: true, completion: nil)
        }
    }
    
    @objc private func loginWithGithubTouched(_ sender: UIButton) {
        configureLoginManager(type: .github)
        socialLoginManager?.login()
    }
    
    @objc private func loginWithAppleTouched(_ sender: UIButton) {
        configureLoginManager(type: .apple)
        socialLoginManager?.login()
    }
    
    private func configureLoginManager(type: LoginService) {
        let keyChainManager = LoginKeyChainManager(loginService: type)
        let loginManager = GithubAuthorizationManager(viewController: self,
                                                      delegate: self,
                                                      keyChainSaver: keyChainManager)
        self.socialLoginManager = loginManager
    }
    
}

extension LoginViewController: SocialLoginManagerDelegate {
    func didSocialLoginSuccess(with loginInfo: LoginInfo) {
        presentIssueViewController(with: loginInfo)
    }
    
    func didSocialLoginFail(with error: LoginError) {
        let errorText = error.description
        presentAlert(with: errorText)
    }
}
