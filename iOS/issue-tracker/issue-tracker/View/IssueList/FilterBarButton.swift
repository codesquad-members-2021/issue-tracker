//
//  FilterBarButtonView.swift
//  issue-tracker
//
//  Created by 양준혁 on 2021/06/10.
//

import UIKit

class FilterBarButton: UIButton {
    override init(frame: CGRect) {
        super.init(frame: frame)
        setImage(UIImage(systemName: "doc.text.magnifyingglass"), for: .normal)
        setTitle("필터", for: .normal)
        setTitleColor(.systemBlue, for: .normal)
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setImage(UIImage(systemName: "doc.text.magnifyingglass"), for: .normal)
        setTitle("필터", for: .normal)
        setTitleColor(.systemBlue, for: .normal)
    }
}
