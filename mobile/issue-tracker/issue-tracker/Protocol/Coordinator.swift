////
////  TabBarCoordinator.swift
////  issue-tracker
////
////  Created by HOONHA CHOI on 2021/07/12.
////
//
 import UIKit

 protocol Coordinator {
    var navigation: UINavigationController? { get set }
    func loadInitalView()
    func coordinator(to coordinator: Coordinator)
 }

 extension Coordinator {
    func coordinator(to coordinator: Coordinator) {
        coordinator.loadInitalView()
    }
 }
