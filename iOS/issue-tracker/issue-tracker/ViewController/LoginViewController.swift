import UIKit
import Combine
import AuthenticationServices

class LoginViewController: UIViewController, ASWebAuthenticationPresentationContextProviding {

    private var webAuthSession: ASWebAuthenticationSession?
    private let loginUseCase = LoginUseCase()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureWebAuthSession()
    }
    
    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        return self.view.window ?? ASPresentationAnchor()
    }
    
    func configureWebAuthSession() {
        let githubLoginURL = loginUseCase.getGitHubLoginURL()
        let url = githubLoginURL.0
        let callbackURLScheme = githubLoginURL.1
        
        self.webAuthSession = ASWebAuthenticationSession.init(url: url, callbackURLScheme: callbackURLScheme, completionHandler: { [weak self] callBack, error in
            guard error == nil, let callBack = callBack else {
                return
            }
            
            let logInURL = self?.loginUseCase.convertToGitHubLogInURL(from: callBack) 
            
            self?.loginUseCase.executeGitHubLogIn(url: logInURL) { completion in
                if completion {
                    DispatchQueue.main.async {
                        self?.performSegue(withIdentifier: "ToIssueList", sender: nil)
                    }
                } else {
                    print("로그인 에러")
                }
            }
        })
        self.webAuthSession?.presentationContextProvider = self
    }
    
    @IBAction func pressedGithubLogin(_ sender: UIButton) {
        webAuthSession?.start()
    }
}
