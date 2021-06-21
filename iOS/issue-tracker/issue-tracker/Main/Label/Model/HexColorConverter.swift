//
//  ColorConverter.swift
//  issue-tracker
//
//  Created by Song on 2021/06/14.
//

import UIKit

final class HexColorConverter: HexColorConvertable {
    func convertHex(_ hex: HexColorCode) -> UIColor {
        let red = hex.red / 255
        let green = hex.green / 255
        let blue = hex.blue / 255
        let alpha = hex.alpha / 255
        return UIColor(red: red, green: green, blue: blue, alpha: alpha)
    }
    
    func isColorDark(hex: HexColorCode) -> Bool {
        let red = hex.red
        let green = hex.green
        let blue = hex.blue
        return (red * 0.299 + green * 0.587 + blue * 0.114) <= 186
    }
}
