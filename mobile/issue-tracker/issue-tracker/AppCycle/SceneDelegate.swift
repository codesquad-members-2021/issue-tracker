//
//  SceneDelegate.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/06/08.
//

import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    var window: UIWindow?
    var appDependency = AppDependency()
    var appCoordinator: AppCoordinator?

    func scene(_ scene: UIScene,
               willConnectTo session: UISceneSession,
               options connectionOptions: UIScene.ConnectionOptions) {
        guard let screen = (scene as? UIWindowScene) else { return }

        let navigationController = UINavigationController()
        navigationController.isNavigationBarHidden = true

        window = UIWindow(frame: UIScreen.main.bounds)
        window?.windowScene = screen
        window?.rootViewController = navigationController
        window?.makeKeyAndVisible()

        let appStore = AppStore(state: .init())
        appCoordinator = AppCoordinator(navigation: navigationController,
                                        dependency: .init(loginCoordinatorFactory: appDependency.makeLoginCoordinator,
                                                          tabBarCoordinatorFactory: appDependency.makeTabBarCoordinator))
        appCoordinator?.dispatch = appStore.dispatch(_:)
        appStore.updateState = appCoordinator?.update(with:)
        appCoordinator?.loadInitalView()
    }
}
