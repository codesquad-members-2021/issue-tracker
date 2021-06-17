//
//  CancelButton.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/11.
//

import UIKit

class CancelButton: UIButton {
    override init(frame: CGRect) {
        super.init(frame: frame)
        setTitle("취소", for: .normal)
        setTitleColor(.systemBlue, for: .normal)
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setTitle("취소", for: .normal)
        setTitleColor(.systemBlue, for: .normal)
    }
}
