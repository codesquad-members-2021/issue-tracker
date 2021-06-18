//
//  mileStoneLabelView.swift
//  issue-tracker
//
//  Created by jinseo park on 6/16/21.
//

import UIKit

final class MileStoneLabelView: UIView {
    
    var text: String?
    var fontColor: UIColor?
    var bgColor: UIColor?
    var imgName: String?
    var issueCount: Int?
    
    private lazy var labelTitle: UILabel = {
        let label = UILabel()
        
        label.translatesAutoresizingMaskIntoConstraints = false
        
        guard let imgName = self.imgName else { return UILabel() }
        guard let fontColors = self.fontColor else { return UILabel() }
        guard let texts = self.text else { return UILabel() }
        guard let issueCount = self.issueCount else { return UILabel() }
        
        let attributedString = NSMutableAttributedString(string: "")
        let imageAttachment = NSTextAttachment()
        let attrs = [NSAttributedString.Key.font : UIFont.boldSystemFont(ofSize: 13), NSAttributedString.Key.foregroundColor : fontColors]
        let issueCountString = NSMutableAttributedString(string:"\(texts) \(issueCount)개", attributes:attrs)
        
        imageAttachment.image = UIImage(systemName: imgName)
        attributedString.append(NSAttributedString(attachment: imageAttachment))
        attributedString.append(issueCountString)
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
    
    required init(text: String, fontColor: UIColor, bgColor: UIColor, imgName: String, issueCount: Int) {
        
        //init을 무엇을 줘도 상관이 없는듯.
        super.init(frame: .zero)
        self.text = text
        self.fontColor = fontColor
        self.bgColor = bgColor
        self.imgName = imgName
        self.issueCount = issueCount

        configure()
    }
    
    private func configure() {
        
        layer.cornerRadius = labelHeight * 0.5
        translatesAutoresizingMaskIntoConstraints = false
        
        addLabelTitle()
        backgroundColor = bgColor
    }
    
    private func addLabelTitle() {
        
        addSubview(labelTitle)
        
        //예이!!!!!!!
        NSLayoutConstraint.activate([
            labelTitle.centerXAnchor.constraint(equalTo: centerXAnchor),
            labelTitle.centerYAnchor.constraint(equalTo: centerYAnchor),
            widthAnchor.constraint(equalTo: widthAnchor),
            heightAnchor.constraint(equalToConstant: labelHeight)
        ])
    }
    func updateIssueCount(_ issueCount: Int) { //후에 issuecount를 변경
        self.issueCount = issueCount
    }
}
