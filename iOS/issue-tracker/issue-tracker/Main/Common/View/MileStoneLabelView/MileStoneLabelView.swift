//
//  mileStoneLabelView.swift
//  issue-tracker
//
//  Created by jinseo park on 6/16/21.
//

import UIKit

final class MileStoneLabelView: UIView {
    
    var chooseNum: Int?
    let texts = ["열린 이슈","닫힌 이슈"]
    let fontColors = [UIColor.blue, UIColor.purple]
    let backgroundColors = [UIColor.red, UIColor.green]
    let systemImgName = ["exclamationmark.circle","archivebox"]
    var issueCount = 0
    
    private lazy var labelTitle: UILabel = {
        let label = UILabel()
        
        let attributedString = NSMutableAttributedString(string: "")
        let imageAttachment = NSTextAttachment()
        imageAttachment.image = UIImage(systemName: systemImgName[chooseNum!])
        
        let attrs = [NSAttributedString.Key.font : UIFont.boldSystemFont(ofSize: 13), NSAttributedString.Key.foregroundColor : fontColors[chooseNum!]]
        let dateString = NSMutableAttributedString(string:texts[chooseNum!]+"  \(issueCount)개", attributes:attrs)
        
        attributedString.append(NSAttributedString(attachment: imageAttachment))
        attributedString.append(dateString)
        label.attributedText = attributedString
        return label
    }()
    
    private let spacing: CGFloat = 15
    
    private lazy var labelHeight: CGFloat = {
        return spacing * 2
    }()
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init(chooseNum: Int) {
        self.chooseNum = chooseNum
        super.init(frame: .zero)
        configure()
    }
    
    private func configure() {
        
        layer.cornerRadius = labelHeight * 0.5
        translatesAutoresizingMaskIntoConstraints = false
        
        addLabelTitle()
    }
    
    private func addLabelTitle() {
        
        addSubview(labelTitle)
        
        NSLayoutConstraint.activate([
            labelTitle.centerXAnchor.constraint(equalTo: centerXAnchor),
            labelTitle.centerYAnchor.constraint(equalTo: centerYAnchor),
            widthAnchor.constraint(equalTo: labelTitle.widthAnchor, constant: spacing),
            heightAnchor.constraint(equalToConstant: labelHeight)
        ])
    }
    
    func updateIssueCount(_ issueCount: Int) {
        self.issueCount = issueCount
    }
    
}
