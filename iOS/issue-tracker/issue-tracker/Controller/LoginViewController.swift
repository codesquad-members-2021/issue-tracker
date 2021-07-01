//
//  ViewController.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/07.
//

import UIKit
import AuthenticationServices

@IBDesignable
class LoginViewController: UIViewController {

    @IBOutlet weak var contentView: LoginView!
    @IBOutlet weak var githubLoginButton: GitHubLoginButton!

    private let authManager = OAuthManager(networkManager: NetworkManager())

    @IBAction func didTapGithubLogin(_ sender: Any) {
        let session = authManager.authenticate()
        session.presentationContextProvider = self
        session.start()
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .systemGroupedBackground

        NotificationCenter.default.addObserver(self, selector: #selector(requestToken), name: Notification.Name.init("authorized"), object: nil)
    }

    @objc func requestToken() {
        authManager.requestJWTToken(completion: {
            let st = UIStoryboard(name: "Main", bundle: nil)
            let vc = st.instantiateViewController(withIdentifier: "main")
            vc.modalPresentationStyle = .fullScreen
            DispatchQueue.main.async {
                self.present(vc, animated: true)
            }
        })
    }
}

extension LoginViewController: ASWebAuthenticationPresentationContextProviding {
    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        return self.view.window ?? ASPresentationAnchor()
    }
}
