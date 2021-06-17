import UIKit
import Combine
import AuthenticationServices

class LoginViewController: UIViewController, ASWebAuthenticationPresentationContextProviding {

    private var webAuthSession: ASWebAuthenticationSession?
    private let loginManager = LoginManager()
    private let jwtManager = JWTManager()
    private let endPoint = EndPoint()
    private var subscriptions = Set<AnyCancellable>()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureWebAuthSession()
    }
    
    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        return self.view.window ?? ASPresentationAnchor()
    }
    
    func configureWebAuthSession() {
        loginManager.requestAuthorization {  url, callBackUrlScheme in
            self.webAuthSession = ASWebAuthenticationSession.init(url: url, callbackURLScheme: callBackUrlScheme, completionHandler: { callBack, error in
                guard error == nil, let successURL = callBack else {
                    print("로그인 실패")
                    return
                }
                let code = self.loginManager.extractAuthorizationCode(from: successURL)
                let url = self.loginManager.convertToURL(with: code)

                self.loginManager.get(with: url, type: JWTDTO.self)
                    .sink(receiveCompletion: { completion in
                        switch completion {
                        case .failure(let error):
                            print(error.localizedDescription)
                        case .finished:
                            DispatchQueue.main.async {
                                guard let issueListViewController = self.storyboard?.instantiateViewController(identifier: "IssueListViewController") else {
                                    return
                                }
                                self.present(issueListViewController, animated: true, completion: nil)
                            }
                        }
                    }, receiveValue: { jwtDTO in
                        self.loginManager.setSecurity(jwt: jwtDTO.data.jwt)
                    }).store(in: &self.subscriptions)
            })
        }
        self.webAuthSession?.presentationContextProvider = self
    }
    
    @IBAction func pressedGithubLogin(_ sender: UIButton) {
        webAuthSession?.start()
    }
}
