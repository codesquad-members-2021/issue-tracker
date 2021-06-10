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
        label.text = "unknown 님, 환영합니다!"
        label.translatesAutoresizingMaskIntoConstraints = false
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
    
    private let spacing: CGFloat = 16
    private var loginInfo: LoginInfo?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .white
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
        let logoutErrorText = LoginError.logout.description
        presentAlert(with: logoutErrorText)
    }
    
}

extension MyAccountViewController: LoginInfoContainer {
    
    func setup(loginInfo: LoginInfo) {
        self.loginInfo = loginInfo
        updateWelcomeLabel()
    }
    
    private func updateWelcomeLabel() {
        guard let userName = loginInfo?.name else { return }
        welcomeLabel.text = "\(userName) 님 환영합니다!"
    }
    
}
