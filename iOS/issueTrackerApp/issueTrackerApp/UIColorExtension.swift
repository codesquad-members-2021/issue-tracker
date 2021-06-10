//
//  UIColorExtension.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/09.
//

import UIKit

extension UIColor {
    
    static func splitHexColorCode(hexColorString: String) -> [String]? {
        let array = Array<Character>(hexColorString)
        var result = [String]()

        if array.count == 7 {
            result.append(String(array[0]))
            result.append("\(array[1])\(array[2])")
            result.append("\(array[3])\(array[4])")
            result.append("\(array[5])\(array[6])")
            return result

        } else if array.count == 4 {
            result.append(String(array[0]))
            result.append("\(array[1])\(array[1])")
            result.append("\(array[2])\(array[2])")
            result.append("\(array[3])\(array[3])")
            return result
        } else {
            return nil
        }
    }
    
    static func hexString2CGFloat(hexString: String) -> CGFloat {
           let scanner = Scanner(string: hexString)
           var intValue: UInt64 = 0
           scanner.scanHexInt64(&intValue)
           return CGFloat(CGFloat(intValue) / 255.0)
    }
    
    static func hexString2UIColor(hexString: String) -> UIColor? {
        if let hexStrings = splitHexColorCode(hexColorString: hexString) {
            let r = hexString2CGFloat(hexString: hexStrings[1])
            let g = hexString2CGFloat(hexString: hexStrings[2])
            let b = hexString2CGFloat(hexString: hexStrings[3])
            return UIColor(red: r, green: g, blue: b, alpha: 1.0)
        }
        return nil
    }
}
