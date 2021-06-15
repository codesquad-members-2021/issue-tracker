//
//  ColorConvertable.swift
//  issue-tracker
//
//  Created by Song on 2021/06/15.
//

import UIKit

protocol HexColorConvertable {
    func convertHex(_ hex: HexColorCode) -> UIColor
    func isColorDark(hex: HexColorCode) -> Bool
}
