//
//  OAuthManager+Extenstion.swift
//  issueTracker
//
//  Created by 오킹 on 2021/06/15.
//
import UIKit
import Foundation
import AuthenticationServices

extension LoginViewController: ASWebAuthenticationPresentationContextProviding {
    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        return self.view.window ?? ASPresentationAnchor()
    }
    
    func excuteOAuth() {
        var webAuthSession: ASWebAuthenticationSession?
        let callbackUrlScheme = "issueTracker"
        let url = URL.init(string: "https://github.com/login/oauth/authorize?client_id=9bf0474340886bbb6ac8&scope=user:email")
        
        webAuthSession = ASWebAuthenticationSession.init(url: url!, callbackURLScheme: callbackUrlScheme, completionHandler: { (callBack:URL?, error:Error?) in
 
            guard error == nil, let successURL = callBack else {
                return
            }

            var json = [String : Any]()
            let code = successURL.absoluteString.components(separatedBy: "code=").last ?? ""
            json["code"] = code
            let data = try? JSONSerialization.data(withJSONObject: json, options: [])

            let backendUrl: URL = URL(string: "http://ec2-52-79-56-138.ap-northeast-2.compute.amazonaws.com/api/user/login")!
            var request: URLRequest = URLRequest.init(url: backendUrl)
            print(code)
            request.httpMethod = "POST"
            request.httpBody = data
            request.addValue("application/json", forHTTPHeaderField: "Content-Type")
            request.addValue("IssueTrackerIOS", forHTTPHeaderField: "User-Agent")
            
            URLSession.shared.dataTask(with: request) { data, response, error in
                print(data)
            }.resume()
        })
        
        // Kick it off
        webAuthSession?.presentationContextProvider = self
        webAuthSession?.start()
    }
}

//class OAuthManager2: NSObject, ASWebAuthenticationPresentationContextProviding {
//
//    private var parentViewController: LoginManageable
//
//    init(parentViewController: LoginManageable) {
//        self.parentViewController = parentViewController
//    }
//
//    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
//        return parentViewController.view.window ?? ASPresentationAnchor()
//    }
//
//    func excuteOAuth() {
//        var webAuthSession: ASWebAuthenticationSession?
//
//        let callbackUrlScheme = "issueTracker"
//        let url = URL.init(string: "https://github.com/login/oauth/authorize?client_id=9bf0474340886bbb6ac8")
//
//        webAuthSession = ASWebAuthenticationSession.init(url: url!, callbackURLScheme: callbackUrlScheme, completionHandler: { (callBack:URL?, error:Error?) in
//            //handle auth response
//            guard error == nil, let successURL = callBack else {
//                return
//            }
//
//            let oauthToken = NSURLComponents(string: (successURL.absoluteString))?.queryItems?.filter({$0.name == "code"}).first
//
//            //tempstring을 body에 넣어서 보내야함
//            var json = [String:Any]()
//            let code = successURL.absoluteString.components(separatedBy: "code=").last ?? ""
//            json["code"] = code
//            let data = try? JSONSerialization.data(withJSONObject: json, options: [])
//            print(code)
//
//
//            let backendUrl: URL = URL(string: "http://ec2-52-79-56-138.ap-northeast-2.compute.amazonaws.com/api/user/login")!
//            var request: URLRequest = URLRequest.init(url: backendUrl)
//
//            request.httpMethod = "POST"
//            request.httpBody = data
//            request.addValue("application/json", forHTTPHeaderField: "Content-Type")
//            request.addValue("IssueTrackerIOS", forHTTPHeaderField: "User-Agent")
//
//            URLSession.shared.dataTask(with: request) { data, response, error in
//                print(data)
//            }.resume()
//        })
//
//        // Kick it off
//        webAuthSession?.presentationContextProvider = self
//        webAuthSession?.start()
//    }
//}
