import UIKit
import Combine
import AuthenticationServices

class LoginViewController: UIViewController, ASWebAuthenticationPresentationContextProviding {

    private var webAuthSession: ASWebAuthenticationSession?
    private let loginManager = LoginManager()
    private var subscriptions = Set<AnyCancellable>()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureWebAuthSession()
    }
    
    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        return self.view.window ?? ASPresentationAnchor()
    }
    
    func configureWebAuthSession() {
        loginManager.requestCode {  url, callBackUrlScheme in
            self.webAuthSession = ASWebAuthenticationSession.init(url: url, callbackURLScheme: callBackUrlScheme, completionHandler: { callBack, error in
                guard error == nil, let successURL = callBack else {
                    print("로그인 실패")
                    return
                }
                let code = self.loginManager.extractAuthorizationCode(from: successURL)
                let url = self.loginManager.convertToURL(with: code)

                self.loginManager.get(with: url, type: LoginManager.JWTDTO.self)
                    .sink(receiveCompletion: { completion in
                        switch completion {
                        case .failure(let error):
                        print(error.localizedDescription, "aaasdfasdfasdf")
                        case .finished:
                            break
                        }
                    }, receiveValue: { data in
                        print(data)
                    }).store(in: &self.subscriptions)
            })
        }
        self.webAuthSession?.presentationContextProvider = self
    }
    
//    func requestCode(handler: @escaping (URL, String) -> Void) {
//        let redirectURI = "issueTracker://login"
//        let callbackUrlScheme = "issueTracker"
//        let url = URL(string: "https://github.com/login/oauth/authorize?client_id=04fb3475fc652d5304a3&redirect_uri=\(redirectURI)")!
//
//        handler(url, callbackUrlScheme)
//    }
//
//    func configureWebAuthSession() {
//        self.requestCode { url, callBackUrlScheme in
//            self.webAuthSession = ASWebAuthenticationSession.init(url: url, callbackURLScheme: callBackUrlScheme, completionHandler: { callBack, error in
//                guard error == nil, let successURL = callBack else {
//                    print("로그인 실패")
//                    return
//                }
//                let code = successURL.absoluteString.split(separator: "=").last
//                print(code, ": code")
//                let requestString = "http://13.125.35.62/api/login/github/ios?code=\(code!)"
//                print("request: " ,requestString)
//                let requestUrl = URL(string: requestString)!
//                let session = URLSession(configuration: .default)
//
//                session.dataTask(with: requestUrl) { data, response, error in
//                    guard let data = data else {
//                        print("error")
//                        return
//                    }
//                    print("data: ",String(data: data, encoding: String.Encoding.utf8))
//                    print(response)
//
//                    var jwtRequest = URLRequest(url: URL(string: "http://13.125.35.62/api/jwt")!)
//                    jwtRequest.setValue("Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJpc3MiOiJzaGlvbiIsImV4cCI6MTYyMzgwMTYwMH0.b6Gu64bxNd_l2gIpOM1VAjGSK02TRtOyOYy0WOhyu2A", forHTTPHeaderField: "Authorization")
//                    session.dataTask(with: jwtRequest) { data, response, error in
//                        guard let data = data else {
//                            print("error", error)
//                            return
//                        }
//                        print("data: ",String(data: data, encoding: String.Encoding.utf8))
//                    }.resume()
//                }.resume()
//            })
//        }
//        self.webAuthSession?.presentationContextProvider = self
//    }
    
    @IBAction func pressedGithubLogin(_ sender: UIButton) {
        webAuthSession?.start()
    }
}
