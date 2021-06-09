//
//  LabelView.swift
//  IssueTracker
//
//  Created by Lia on 2021/06/09.
//

import UIKit

class LabelView: UILabel {
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init?(coder: NSCoder) {
        fatalError()
    }
    
}


extension LabelView {
    
    private func configure() {
        translatesAutoresizingMaskIntoConstraints = false
        clipsToBounds = true
        layer.cornerRadius = 13
        textColor = .white
        font = UIFont(descriptor: UIFontDescriptor(name: "System", size: 15), size: 15)
        textAlignment = .center
    }
    
    func fillUI(with label: Label) {
        self.text = label.name
        self.backgroundColor = hexStringToUIColor(hex: label.color)
        print(intrinsicContentSize.width)
        NSLayoutConstraint.activate([
            heightAnchor.constraint(equalToConstant: intrinsicContentSize.height + 10),
            widthAnchor.constraint(greaterThanOrEqualToConstant: intrinsicContentSize.width + 20)
        ])
    }
    
    func hexStringToUIColor (hex:String) -> UIColor {
        var cString:String = hex.trimmingCharacters(in: .whitespacesAndNewlines).uppercased()

        if (cString.hasPrefix("#")) {
            cString.remove(at: cString.startIndex)
        }

        if ((cString.count) != 6) {
            return UIColor.gray
        }

        var rgbValue:UInt64 = 0
        Scanner(string: cString).scanHexInt64(&rgbValue)

        return UIColor(
            red: CGFloat((rgbValue & 0xFF0000) >> 16) / 255.0,
            green: CGFloat((rgbValue & 0x00FF00) >> 8) / 255.0,
            blue: CGFloat(rgbValue & 0x0000FF) / 255.0,
            alpha: CGFloat(1.0)
        )
    }
    
}

