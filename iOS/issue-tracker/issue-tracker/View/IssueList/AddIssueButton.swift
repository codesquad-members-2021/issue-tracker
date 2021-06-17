//
//  AddIssueButton.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/11.
//

import UIKit

class AddIssueButton: UIView {

    override init(frame: CGRect) {
        super.init(frame: frame)
        setupButton()
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setupButton()
    }
    
    override func draw(_ rect: CGRect) {
        let path = UIBezierPath()
        
        path.move(to: CGPoint(x: self.bounds.width * 0.25, y: self.bounds.height * 0.5))
        path.addLine(to: CGPoint(x: self.bounds.width * 0.75, y: self.bounds.height * 0.5))
        path.move(to: CGPoint(x: self.bounds.width * 0.5, y: self.bounds.height * 0.25))
        path.addLine(to: CGPoint(x: self.bounds.width * 0.5, y: self.bounds.height * 0.75))
        UIColor.white.set()
        path.stroke()
    }
    
    func setupButton() {
        clipsToBounds = true
        layer.cornerRadius = self.bounds.size.width * 0.5
        backgroundColor = .systemBlue
    }
}
