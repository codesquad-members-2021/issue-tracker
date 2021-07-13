//
//  StoryBoarded.swift
//  issue-tracker
//
//  Created by HOONHA CHOI on 2021/07/14.
//

import UIKit

protocol StoryBoarded {
    static func instantiate(creator: @escaping ((NSCoder) -> Self?)) -> Self
}

extension StoryBoarded where Self: UIViewController {
    static func instantiate(creator: @escaping ((NSCoder) -> Self?)) -> Self {
        let id = String(describing: self)
        let storyboard = UIStoryboard(name: id, bundle: nil)
        return storyboard.instantiateViewController(identifier: id, creator: creator)
    }
}
