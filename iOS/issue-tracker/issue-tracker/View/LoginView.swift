//
//  LoginView.swift
//  issue-tracker
//
//  Created by zeke on 2021/06/08.
//

import UIKit

class LoginView: UIView {
    
    let titleLabel: UILabel = {
        var label = UILabel()
        label.text = "Issue Tracker"
        label.font = UIFont.systemFont(ofSize: 48)
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        
        //AutoLayout
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
