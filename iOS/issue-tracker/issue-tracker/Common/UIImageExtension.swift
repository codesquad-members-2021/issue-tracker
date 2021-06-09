//
//  UIImageExtension.swift
//  issue-tracker
//
//  Created by jinseo park on 6/8/21.
//

import UIKit

extension UIImage {
    func resizedImage(size newSize: CGSize) -> UIImage? {
        UIGraphicsBeginImageContextWithOptions(newSize, false, 0)
        let newFrame = CGRect(origin: CGPoint.zero, size: newSize)
        self.draw(in: newFrame)
        let resizedImage = UIGraphicsGetImageFromCurrentImageContext()
        UIGraphicsEndImageContext()
        self.withRenderingMode(.alwaysOriginal)
        return resizedImage
    }
}
