//
//  HexColorCode.swift
//  issue-tracker
//
//  Created by Song on 2021/06/15.
//

import UIKit

struct HexColorCode {
    let red: CGFloat
    let green: CGFloat
    let blue: CGFloat
    let alpha: CGFloat
    
    init(from hexInString: String) {
        let hexNums = hexInString.filter{ $0 != "#" }.map{ String($0) }
        
        let hexRedString = hexNums.count >= 2 ? hexNums[0...1].joined() : "00"
        self.red = CGFloat(Int(hexRedString, radix: 16) ?? 255)
        
        let hexGreenString = hexNums.count >= 4 ? hexNums[2...3].joined() : "00"
        self.green = CGFloat(Int(hexGreenString, radix: 16) ?? 255)
        
        let hexBlueString = hexNums.count >= 6 ? hexNums[4...5].joined() : "00"
        self.blue = CGFloat(Int(hexBlueString, radix: 16) ?? 255)
        
        let hexAlphaString = hexNums.count == 8 ? hexNums[6...7].joined() : "FF"
        self.alpha = CGFloat(Int(hexAlphaString, radix: 16) ?? 255)
    }
}
