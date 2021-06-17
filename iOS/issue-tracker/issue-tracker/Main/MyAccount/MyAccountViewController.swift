//
//  MyAccountViewController.swift
//  issue-tracker
//
//  Created by Song on 2021/06/09.
//

import UIKit

class MyAccountViewController: UIViewController {
    
    
    private lazy var welcomeLabel: UILabel = {
        let label = UILabel()
        label.font = .systemFont(ofSize: 30, weight: .medium)
        label.text = "\(userName) 님, \n환영합니다!"
        label.translatesAutoresizingMaskIntoConstraints = false
        label.numberOfLines = 2
        return label
    }()
    
    private lazy var logoutButton: UIButton = {
        let button = UIButton()
        button.backgroundColor = Colors.closeCarrot
        button.setTitle("로그아웃", for: .normal)
        button.setTitleColor(UIColor.white, for: .normal)
        button.layer.cornerRadius = view.frame.width * 0.024
        button.translatesAutoresizingMaskIntoConstraints = false
        button.addTarget(self, action: #selector(didLogoutTouched), for: .touchUpInside)
        return button
    }()
    
    private var userName = "unknown"
    private let spacing: CGFloat = 16
    
    override func viewDidLoad() {        
        super.viewDidLoad()
        view.backgroundColor = .white
        title = "내 계정"
        updateWelcomeLabel()
        addWelcomeLabel()
        addLogoutButton()
    }
    
    private func addWelcomeLabel() {
        view.addSubview(welcomeLabel)
        
        NSLayoutConstraint.activate([
            welcomeLabel.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor, constant: spacing * 2),
            welcomeLabel.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor, constant: -spacing * 2),
            welcomeLabel.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: spacing * 2)
        ])
    }
    
    private func addLogoutButton() {
        view.addSubview(logoutButton)

        NSLayoutConstraint.activate([
            logoutButton.widthAnchor.constraint(equalToConstant: view.frame.width - spacing * 2),
            logoutButton.heightAnchor.constraint(equalToConstant: view.frame.height * 0.05),
            logoutButton.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor, constant: -spacing),
            logoutButton.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor, constant: -spacing)
        ])
    }
    
    private func presentAlert(with errorMessage: String) {
        DispatchQueue.main.async {
            let alert = AlertFactory.create(body: errorMessage)
            self.present(alert, animated: true, completion: nil)
        }
    }
    
    @objc private func didLogoutTouched(_ sender: UIButton) {
        let loginInfo = LoginInfo.shared
        guard let service = loginInfo.service else { return }
        let loginManager = LoginKeyChainManager(loginService: service)
        guard loginManager.delete() else {
            let logoutError = LoginError.logout
            presentAlert(with: logoutError.description)
            return
        }
        loginInfo.clear()
        let loginViewController = LoginViewController()
        loginViewController.modalPresentationStyle = .fullScreen
        self.present(loginViewController, animated: true, completion: nil)
    }
    
    private func updateWelcomeLabel() {
        let loginInfo = LoginInfo.shared
        guard let userName = loginInfo.name else { return }
        self.userName = userName
    }
    
}
