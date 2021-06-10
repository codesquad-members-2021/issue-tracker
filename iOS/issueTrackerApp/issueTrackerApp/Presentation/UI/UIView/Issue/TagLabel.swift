//
//  TagLabel.swift
//  issueTrackerApp
//
//  Created by 조중윤 on 2021/06/09.
//

import UIKit

class TagLabel: UILabel {

    init() {
        super.init(frame: .zero)
        self.layer.cornerRadius = 10
        self.layer.masksToBounds = true
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        assertionFailure("Init with coder should not be called")
    }
    
    public func custom(title: String, colorCode: String) {
        self.text = title
        self.backgroundColor = UIColor.hexString2UIColor(hexString: colorCode)
        self.textColor = .white
    }
    
    public func openIssue(of number: Int) {
        let textColor = UIColor.hexString2UIColor(hexString: "#04009a") ?? .red
        let backgroundColor = UIColor.hexString2UIColor(hexString: "#c0fefc")
        
        let font = UIFont.systemFont(ofSize: 30)
        let attributes: [NSAttributedString.Key: Any] = [
            .font: font,
            .foregroundColor: textColor,
        ]
        
        let fullString = NSMutableAttributedString(string: "", attributes: attributes)
        let imageAttachment = NSTextAttachment()
        imageAttachment.image = UIImage(systemName: "exclamationmark.circle")
        let imageString = NSAttributedString(attachment: imageAttachment)
        fullString.append(imageString)
        fullString.append(NSAttributedString(string: "열린 이슈 \(number)개"))
        
        self.backgroundColor = backgroundColor
        self.layer.borderWidth = 1
        self.layer.borderColor = textColor.cgColor
    }
    
    public func closedIssue(of number: Int) {
        let textColor = UIColor.hexString2UIColor(hexString: "#3b14a7") ?? .red
        let backgroundColor = UIColor.hexString2UIColor(hexString: "#ac66cc")
        
        let font = UIFont.systemFont(ofSize: 30)
        let attributes: [NSAttributedString.Key: Any] = [
            .font: font,
            .foregroundColor: textColor,
        ]
        
        let fullString = NSMutableAttributedString(string: "", attributes: attributes)
        let imageAttachment = NSTextAttachment()
        imageAttachment.image = UIImage(systemName: "archivebox")
        let imageString = NSAttributedString(attachment: imageAttachment)
        fullString.append(imageString)
        fullString.append(NSAttributedString(string: "닫힌 이슈 \(number)개"))
        
        self.backgroundColor = backgroundColor
        self.layer.borderWidth = 1
        self.layer.borderColor = textColor.cgColor
    }
}
