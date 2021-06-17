//
//  SelectBarButton.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/10.
//

import UIKit

class SelectBarButton: UIButton {
    override init(frame: CGRect) {
        super.init(frame: frame)
        setImage(UIImage(systemName: "checkmark.circle"), for: .normal)
        setTitle("선택", for: .normal)
        setTitleColor(.systemBlue, for: .normal)
        semanticContentAttribute = .forceRightToLeft
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setImage(UIImage(systemName: "checkmark.circle"), for: .normal)
        setTitle("선택", for: .normal)
        setTitleColor(.systemBlue, for: .normal)
        semanticContentAttribute = .forceRightToLeft
    }
}
