//
//  AddLabelButton.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/13.
//

import UIKit

class AddLabelButton: UIButton {
    override init(frame: CGRect) {
        super.init(frame: frame)
        setImage(UIImage(systemName: "plus"), for: .normal)
        setTitle("추가", for: .normal)
        setTitleColor(.systemBlue, for: .normal)
        semanticContentAttribute = .forceRightToLeft
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setImage(UIImage(systemName: "plus"), for: .normal)
        setTitle("추가", for: .normal)
        setTitleColor(.systemBlue, for: .normal)
        semanticContentAttribute = .forceRightToLeft
    }
}
