//
//  UINibCreatable.swift
//  IssueTracker
//
//  Created by Lia on 2021/06/10.
//

import UIKit

protocol ReuseIdentifierable: AnyObject {
}

extension ReuseIdentifierable {
    static var reuseIdentifier: String {
            return String(describing: self)
        }
}

protocol UINibCreatable: ReuseIdentifierable {
}

extension UINibCreatable {
    static var nib: UINib {
        return UINib(nibName: reuseIdentifier, bundle: nil)
    }
}
