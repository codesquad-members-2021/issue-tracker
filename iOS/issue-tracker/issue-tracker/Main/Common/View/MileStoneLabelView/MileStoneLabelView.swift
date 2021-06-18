//
//  mileStoneLabelView.swift
//  issue-tracker
//
//  Created by jinseo park on 6/16/21.
//

import UIKit

final class MileStoneLabelView: UIView {
    
    var texts: String?
    var fontColors: UIColor?
    var backgroundColors: UIColor?
    var imgName: String?
    var issueCount: Int?
    
    private lazy var labelTitle: UILabel = {
        let label = UILabel()
        
        guard let imgName = self.imgName else { return UILabel() }
        guard let fontColors = self.fontColors else { return UILabel() }
        guard let texts = self.texts else { return UILabel() }
        guard let issueCount = self.issueCount else { return UILabel() }
        
        let attributedString = NSMutableAttributedString(string: "")
        let imageAttachment = NSTextAttachment()
        let attrs = [NSAttributedString.Key.font : UIFont.boldSystemFont(ofSize: 13), NSAttributedString.Key.foregroundColor : fontColors]
        let dateString = NSMutableAttributedString(string:"\(texts) \(issueCount)개", attributes:attrs)
        
        imageAttachment.image = UIImage(systemName: imgName)
        attributedString.append(NSAttributedString(attachment: imageAttachment))
        attributedString.append(dateString)
        label.attributedText = attributedString
        label.backgroundColor = backgroundColor
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
    
    required init(texts: String, fontColors: UIColor, backgroundColors: UIColor, imgName: String, issueCount: Int) {
//        super.init(frame: .zero)
        super.init(frame: CGRect(x: 0, y: 0, width: 113, height: 30))
        self.texts = texts
        self.fontColors = fontColors
        self.backgroundColors = backgroundColors
        self.imgName = imgName
        self.issueCount = issueCount

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
            //widthAnchor.constraint(equalTo: labelTitle.widthAnchor, constant: spacing)
            widthAnchor.constraint(equalTo: widthAnchor),
            heightAnchor.constraint(equalToConstant: labelHeight)
        ])
    }
    
    func updateIssueCount(_ issueCount: Int) { //후에 issuecount를 변경
        self.issueCount = issueCount
    }
    
}
